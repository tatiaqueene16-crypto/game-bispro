const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(__dirname));

const players = new Map();
const clean = s => String(s || '').replace(/[<>]/g, '').trim();
const list = () => [...players.values()].map(p => ({ id: p.id, name: p.name, admin: p.admin }));
const num = v => (Number.isFinite(v) ? Math.max(-200, Math.min(200, v)) : 0);

io.on('connection', socket => {
    socket.on('login', (d, cb) => {
        if (typeof cb !== 'function') return;
        if (players.has(socket.id)) return cb({ ok: false, error: 'Already logged in' });
        d = d || {};
        let name = clean(d.name).slice(0, 16);
        const all = [...players.values()];
        if (name.length < 2) return cb({ ok: false, error: 'Name must be 2-16 characters' });
        if (all.some(q => q.name.toLowerCase() === name.toLowerCase())) return cb({ ok: false, error: 'Name already in use' });
        const p = { id: socket.id, name, admin: false, x: 0, z: 10, ry: 0, color: null, formal: false };
        players.set(socket.id, p);
        cb({ ok: true, id: p.id, name, admin: false, players: all });
        socket.broadcast.emit('join', p);
        io.emit('online', list());
    });

    socket.on('state', d => {
        const p = players.get(socket.id);
        if (!p || !d) return;
        p.x = num(d.x); p.z = num(d.z); p.ry = num(d.ry);
        socket.broadcast.emit('state', { id: p.id, x: p.x, z: p.z, ry: p.ry, mv: !!d.mv, j: num(d.j) });
    });

    let lastChat = 0;
    socket.on('chat', msg => {
        const p = players.get(socket.id);
        const now = Date.now();
        if (!p || now - lastChat < 500) return;
        lastChat = now;
        msg = clean(msg).slice(0, 80);
        if (msg) io.emit('chat', { id: p.id, name: p.name, admin: p.admin, msg });
    });

    socket.on('emote', type => {
        const p = players.get(socket.id);
        if (p && ['wave', 'present', 'cheer', 'nod'].includes(type)) socket.broadcast.emit('emote', { id: p.id, type });
    });

    socket.on('outfit', d => {
        const p = players.get(socket.id);
        if (!p || !d) return;
        const c = Number(d.color);
        p.color = Number.isInteger(c) && c >= 0 && c <= 0xffffff ? c : 0x0ea5e9;
        p.formal = !!d.formal;
        socket.broadcast.emit('outfit', { id: p.id, color: p.color, formal: p.formal });
    });

    socket.on('voice-signal', d => {
        if (!d || !d.to) return;
        io.to(d.to).emit('voice-signal', { from: socket.id, signal: d.signal });
    });

    socket.on('voice-state', isSpeaking => {
        const p = players.get(socket.id);
        if (p) socket.broadcast.emit('voice-state', { id: p.id, speaking: !!isSpeaking });
    });

    socket.on('disconnect', () => {
        if (players.delete(socket.id)) {
            io.emit('leave', socket.id);
            io.emit('online', list());
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => console.log('BISPRO LIFE berjalan di http://localhost:' + PORT));
