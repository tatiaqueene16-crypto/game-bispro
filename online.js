(function () {
    'use strict';
    const PALETTE = [0x0ea5e9, 0xef4444, 0x22c55e, 0xf59e0b, 0x8b5cf6, 0xec4899, 0x14b8a6, 0x1e293b];
    const HAIRS = ['short', 'spiky', 'long', 'bob', 'ponytail', 'bun', 'curly', 'cap'];
    const SKINS = [0xf1c27d, 0xffdbac, 0xe0ac69, 0xc68642];
    const HAIRC = [0x3e2723, 0x271c19, 0x0f172a, 0x1e293b, 0x7c2d12, 0xca8a04];
    const PANTS = [0x1f2937, 0x334155, 0x1e3a8a, 0x44403c, 0x0f766e, 0x6d28d9];
    const SHOES = [0xf8fafc, 0xef4444, 0xfacc15, 0x111827, 0xf472b6];

    let socket = null, myId = null, myName = 'You', isAdmin = false;
    const me = { color: 0x0ea5e9, formal: false };
    const remotes = new Map();
    window.remotePlayers = [];
    window.frameHooks = window.frameHooks || [];

    const $ = id => document.getElementById(id);
    const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

    npcAvatars.splice(0).forEach(n => scene.remove(n));

    const toastCss = document.createElement('style');
    toastCss.textContent = '#toast{position:fixed;top:84px;left:50%;transform:translateX(-50%);z-index:60;padding:10px 20px;border-radius:999px;color:#fff;font-weight:700;font-size:14px;box-shadow:0 8px 25px rgba(0,0,0,.35);display:none}';
    document.head.appendChild(toastCss);
    const toastEl = document.createElement('div');
    toastEl.id = 'toast';
    document.body.appendChild(toastEl);
    function toast(text, color) {
        toastEl.textContent = text;
        toastEl.style.background = color;
        toastEl.style.display = 'block';
        clearTimeout(toast.t);
        toast.t = setTimeout(() => { toastEl.style.display = 'none'; }, 3500);
    }

    function renderRoster(users) {
        const list = $('roster-list');
        if (!list) return;
        list.innerHTML = '';
        const hd = document.querySelector('#roster-panel .panel-header h3');
        if (hd) hd.textContent = 'Players Online (' + users.length + ')';
        const badge = document.querySelector('#roster-panel .online-badge');
        if (badge) badge.textContent = '● ' + users.length + ' online';
        users.forEach(u => {
            const li = document.createElement('li'), left = document.createElement('div');
            left.className = 'student-left';
            const dot = document.createElement('span');
            dot.className = 'dot'; dot.style.background = '#22c55e';
            const nm = document.createElement('span');
            nm.textContent = u.name + (u.id === myId ? ' (You)' : '');
            left.appendChild(dot); left.appendChild(nm);
            const hint = document.createElement('span');
            hint.className = 'tp-hint'; hint.textContent = u.id === myId ? '' : 'Go';
            li.appendChild(left); li.appendChild(hint);
            if (u.id !== myId) li.onclick = () => {
                const r = remotes.get(u.id);
                if (r) player.position.set(r.av.position.x, 0.1, r.av.position.z + 2.2);
            };
            list.appendChild(li);
        });
    }
    renderRoster([]);

    function appearance(name, admin) {
        if (name.toLowerCase() === 'tatia') return { look: ['long', 0, 0x111827, 0xfacc15, 1.02, '', 0x1c1917], skin: 0xffdbac, hair: 0x1c1917, color: 0x7c3aed };
        const h = hash(name.toLowerCase());
        const pick = (a, s) => a[(h >>> s) % a.length];
        return {
            look: [pick(HAIRS, 0), (h >>> 3) % 3 === 0 ? 1 : 0, pick(PANTS, 5), pick(SHOES, 7), 0.94 + ((h >>> 9) % 15) / 100, ['', 'bag', 'scarf'][(h >>> 11) % 3], pick(HAIRC, 13)],
            skin: pick(SKINS, 2), hair: pick(HAIRC, 13), color: pick(PALETTE, 4)
        };
    }
    function makeAvatar(name, admin) {
        const ap = appearance(name, admin);
        const av = createDetailedRobloxAvatar({ name: name, role: 'Player', casualColor: ap.color, skin: ap.skin, hair: ap.hair, look: ap.look }, false);
        setNameTag(av, name, admin);
        applyOutfit(av, { color: ap.color, formal: false });
        av.userData.defaultColor = ap.color;
        return av;
    }
    function setNameTag(av, name, admin) {
        const old = av.children.find(c => c.isSprite && (c.userData.isTag || !c.userData.isBubble));
        if (old) av.remove(old);
        const t = makeLabel((admin ? '👑 ' : '') + name, { w: 320, h: 64, bg: admin ? 'rgba(180,120,5,0.95)' : 'rgba(15,23,42,0.78)', sw: 3, sh: 0.6 });
        t.position.set(0, 3.4, 0);
        t.userData.isTag = true;
        av.add(t);
    }
    function applyOutfit(av, o) {
        const u = av.userData;
        u.casualColor = o.color;
        u.torso.material.color.setHex(o.formal ? 0x0f172a : o.color);
        u.casualParts.forEach(p => p.visible = !o.formal);
        u.formalParts.forEach(p => p.visible = o.formal);
    }

    function showBubble(av, text) {
        const u = av.userData;
        clearBubble(av);
        const m = document.createElement('canvas').getContext('2d');
        const font = 'bold 32px Segoe UI, Arial, sans-serif';
        m.font = font;
        const words = text.replace(/(\S{20})/g, '$1 ').split(/\s+/), lines = [];
        let cur = '';
        words.forEach(w => {
            const t = cur ? cur + ' ' + w : w;
            if (m.measureText(t).width > 440 && cur) { lines.push(cur); cur = w; } else cur = t;
        });
        lines.push(cur);
        const L = lines.slice(0, 4), W = 512, H = L.length * 40 + 40, TH = H + 16;
        const c = document.createElement('canvas');
        c.width = W; c.height = TH;
        const x = c.getContext('2d');
        x.fillStyle = '#ffffff'; x.strokeStyle = '#94a3b8'; x.lineWidth = 4;
        rr(x, 3, 3, W - 6, H - 6, 24); x.fill(); x.stroke();
        x.beginPath(); x.moveTo(W / 2 - 14, H - 4); x.lineTo(W / 2, TH - 2); x.lineTo(W / 2 + 14, H - 4); x.fill();
        x.fillStyle = '#0f172a'; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle';
        L.forEach((l, i) => x.fillText(l, W / 2, 20 + 20 + i * 40));
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
        s.center.set(0.5, 0);
        s.scale.set(3.4, 3.4 * TH / W, 1);
        s.position.set(0, 3.8, 0);
        s.userData.isBubble = true;
        av.add(s);
        u.bubble = s;
        u.bubbleTimer = setTimeout(() => clearBubble(av), 120000);
    }
    function clearBubble(av) {
        const u = av.userData;
        clearTimeout(u.bubbleTimer);
        if (u.bubble) { av.remove(u.bubble); u.bubble.material.map.dispose(); u.bubble.material.dispose(); u.bubble = null; }
    }
    function chatLine(name, msg, admin) {
        const box = $('chat-messages'), d = document.createElement('div'), b = document.createElement('b');
        b.textContent = (admin ? '👑 ' : '') + name + ': ';
        d.appendChild(b); d.appendChild(document.createTextNode(msg));
        box.appendChild(d); box.scrollTop = box.scrollHeight;
    }

    function sendChat(msg) {
        if (socket && socket.connected) socket.emit('chat', msg);
        else { chatLine(myName, msg, isAdmin); showBubble(player, msg); }
    }
    $('chat-form').onsubmit = e => {
        e.preventDefault();
        const input = $('chat-input'), msg = input.value.trim().slice(0, 80);
        if (!msg) return;
        input.value = ''; input.blur();
        sendChat(msg);
        if (typeof nearbyTarget !== 'undefined' && nearbyTarget) {
            const t = nearbyTarget;
            setTimeout(() => {
                const reply = `Let's practice ${t.skills[0]} at ${t.zone}!`;
                chatLine(t.name, reply, false);
            }, 600);
        }
    };
    const origEmote = window.triggerEmote;
    window.triggerEmote = type => { origEmote(type); if (socket) socket.emit('emote', type); };

    function pushOutfit() {
        applyOutfit(player, me);
        $('btn-outfit').innerText = me.formal ? '👕 Switch to Casual' : '👔 Switch to Formal Suit';
        if (socket) socket.emit('outfit', me);
    }
    $('btn-outfit').onclick = () => {
        me.formal = !me.formal;
        pushOutfit();
        addSystemMessage(me.formal ? 'You switched to Formal Business Suit!' : 'You switched to Casual Hoodie Outfit!');
    };
    function buildSwatches() {
        const wrap = document.createElement('div');
        wrap.className = 'swatches';
        PALETTE.forEach(c => {
            const b = document.createElement('button');
            b.className = 'swatch';
            b.style.background = hex6(c);
            b.title = 'Hoodie color';
            b.onclick = () => { me.color = c; me.formal = false; pushOutfit(); };
            wrap.appendChild(b);
        });
        $('btn-outfit').parentNode.appendChild(wrap);
    }

    function addRemote(p) {
        if (remotes.has(p.id)) return;
        const av = makeAvatar(p.name, p.admin);
        applyOutfit(av, { color: p.color != null ? p.color : av.userData.defaultColor, formal: !!p.formal });
        av.position.set(p.x || 0, 0.1, p.z || 0);
        scene.add(av);
        remotes.set(p.id, { name: p.name, av: av, tx: p.x || 0, tz: p.z || 0, ty: p.ry || 0 });
        window.remotePlayers.push(av);
    }
    function removeRemote(id) {
        const r = remotes.get(id);
        if (!r) return;
        clearBubble(r.av);
        scene.remove(r.av);
        window.remotePlayers.splice(window.remotePlayers.indexOf(r.av), 1);
        remotes.delete(id);
    }
    window.frameHooks.push((dt) => {
        const k = Math.min(1, dt * 10);
        remotes.forEach(r => {
            r.av.position.x += (r.tx - r.av.position.x) * k;
            r.av.position.z += (r.tz - r.av.position.z) * k;
            const d = ((r.ty - r.av.rotation.y + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
            r.av.rotation.y += d * k;
        });
    });
    let sendT = 0;
    window.frameHooks.push((dt) => {
        sendT += dt;
        if (!socket || !myId || sendT < 0.066) return;
        sendT = 0;
        const r2 = v => Math.round(v * 100) / 100;
        socket.emit('state', { x: r2(player.position.x), z: r2(player.position.z), ry: r2(player.rotation.y), mv: !!player.userData.moving, j: r2(player.userData.jumpY || 0) });
    });

    const css = document.createElement('style');
    css.textContent = `
    #login-screen{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.72);backdrop-filter:blur(6px)}
    .login-card{background:#fff;border-radius:18px;padding:28px;width:340px;max-width:92%;text-align:center;box-shadow:0 20px 45px rgba(0,0,0,.4);user-select:text}
    .login-card h1{font-size:22px;color:#1e3a8a;margin-bottom:4px}
    .login-card p{font-size:13px;color:#64748b;margin-bottom:14px}
    .login-card input{width:100%;padding:11px 12px;margin-bottom:10px;border:1px solid #cbd5e1;border-radius:10px;font-size:14px;outline:none}
    .login-card button{width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#fff;font-weight:700;font-size:14px;cursor:pointer}
    #login-err{color:#dc2626;font-size:12px;min-height:16px;margin-top:8px}
    .swatches{display:flex;flex-wrap:wrap;gap:5px;margin-top:4px}
    .swatch{width:20px;height:20px;border-radius:50%;border:2px solid rgba(255,255,255,.6);cursor:pointer;padding:0}
    .swatch:hover{transform:scale(1.15)}`;
    document.head.appendChild(css);

    const login = document.createElement('div');
    login.id = 'login-screen';
    login.innerHTML = `<div class="login-card"><h1>🎓 BISPRO LIFE</h1><p>Enter your name to join the campus</p>
      <input id="login-name" maxlength="16" placeholder="Your name" autocomplete="off">
      <button id="login-btn">Join Campus</button>
      <div id="login-err"></div></div>`;
    document.body.appendChild(login);
    if (typeof io !== 'undefined') {
        socket = io();
        socket.on('connect_error', () => { $('login-err').innerText = 'Cannot reach the server.'; });
    }
    function doLogin() {
        const err = $('login-err');
        err.innerText = '';
        const name = $('login-name').value.trim();
        if (!socket) {
            if (name.length < 2) { err.innerText = 'Name must be 2-16 characters'; return; }
            startGame({ name: name, admin: false, id: 'solo', players: [] });
            return;
        }
        socket.emit('login', { name: name }, res => {
            if (!res || !res.ok) { err.innerText = (res && res.error) || 'Login failed'; return; }
            startGame(res);
        });
    }
    $('login-btn').onclick = doLogin;
    login.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    $('login-name').focus();

    function startGame(info) {
        myName = info.name; isAdmin = info.admin; myId = info.id;
        login.remove();
        const old = player;
        const av = makeAvatar(myName, isAdmin);
        av.position.copy(old.position);
        scene.remove(old);
        player = av;
        scene.add(av);
        me.color = av.userData.defaultColor; me.formal = false;
        buildSwatches();
        addSystemMessage(`Welcome, ${myName}!` + (socket ? '' : ' (solo mode)'));
        (info.players || []).forEach(addRemote);
        renderRoster([{ id: myId, name: myName }].concat((info.players || []).map(q => ({ id: q.id, name: q.name }))));
        if (socket) {
            pushOutfit();
            socket.on('join', p => { addRemote(p); addSystemMessage(`${p.name} joined the campus.`); toast('🟢 ' + p.name + ' joined', '#16a34a'); });
            socket.on('online', renderRoster);
            socket.on('leave', id => { const r = remotes.get(id); if (r) { addSystemMessage(`${r.name} left the campus.`); toast('⚪ ' + r.name + ' left', '#64748b'); } removeRemote(id); });
            socket.on('state', d => { const r = remotes.get(d.id); if (!r) return; r.tx = d.x; r.tz = d.z; r.ty = d.ry; r.av.userData.moving = d.mv; r.av.userData.jumpY = d.j; });
            socket.on('chat', d => {
                chatLine(d.name, d.msg, d.admin);
                const target = d.id === myId ? player : (remotes.get(d.id) || {}).av;
                if (target) showBubble(target, d.msg);
            });
            socket.on('emote', d => { const r = remotes.get(d.id); if (r) r.av.userData.emote = { type: d.type, t: 0 }; });
            socket.on('outfit', d => { const r = remotes.get(d.id); if (r) applyOutfit(r.av, d); });
            socket.on('disconnect', () => addSystemMessage('Disconnected from server.'));
        }
    }

    document.querySelectorAll('.m-btn, .m-action-btn[data-key]').forEach(btn => {
        const k = btn.getAttribute('data-key');
        const press = e => { e.preventDefault(); keys[k] = true; };
        const release = e => { e.preventDefault(); keys[k] = false; };
        btn.addEventListener('touchstart', press, { passive: false });
        btn.addEventListener('touchend', release, { passive: false });
        btn.addEventListener('touchcancel', release, { passive: false });
    });

    const mInteract = $('m-btn-interact');
    if (mInteract) {
        mInteract.addEventListener('touchstart', e => {
            e.preventDefault();
            if (typeof nearbyTarget !== 'undefined' && nearbyTarget) openStudentModal(nearbyTarget);
        }, { passive: false });

        window.frameHooks.push(() => {
            if (typeof nearbyTarget !== 'undefined' && nearbyTarget) mInteract.classList.remove('hidden');
            else mInteract.classList.add('hidden');
        });
    }

    let localStream = null;
    let micEnabled = false;
    const peers = new Map();
    const rtcConfig = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

    function setSpeakingIndicator(av, speaking) {
        if (!av) return;
        const tag = av.children.find(c => c.isSprite && c.userData.isTag);
        if (tag) tag.material.color.setHex(speaking ? 0x4ade80 : 0xffffff);
    }

    function createPeer(targetId, initiator) {
        if (peers.has(targetId)) return peers.get(targetId);
        const pc = new RTCPeerConnection(rtcConfig);
        peers.set(targetId, pc);

        if (localStream) {
            localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
        }

        pc.onicecandidate = e => {
            if (e.candidate && socket) {
                socket.emit('voice-signal', { to: targetId, signal: { candidate: e.candidate } });
            }
        };

        pc.ontrack = e => {
            let audio = document.getElementById('audio-' + targetId);
            if (!audio) {
                audio = document.createElement('audio');
                audio.id = 'audio-' + targetId;
                audio.autoplay = true;
                document.body.appendChild(audio);
            }
            audio.srcObject = e.streams[0];
        };

        if (initiator) {
            pc.createOffer().then(offer => pc.setLocalDescription(offer)).then(() => {
                if (socket) socket.emit('voice-signal', { to: targetId, signal: { sdp: pc.localDescription } });
            });
        }
        return pc;
    }

    const btnMic = $('btn-mic');
    if (btnMic) {
        btnMic.onclick = async () => {
            if (!socket) {
                addSystemMessage('Voice chat membutuhkan server multiplayer.');
                return;
            }
            if (!micEnabled) {
                try {
                    if (!localStream) {
                        localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    }
                    localStream.getAudioTracks().forEach(t => t.enabled = true);
                    micEnabled = true;
                    btnMic.innerText = '🎤 Mic: ON';
                    btnMic.style.background = '#16a34a';
                    setSpeakingIndicator(player, true);
                    socket.emit('voice-state', true);
                    addSystemMessage('Voice chat aktif!');

                    remotes.forEach((_, id) => {
                        const oldPc = peers.get(id);
                        if (oldPc) { oldPc.close(); peers.delete(id); }
                        createPeer(id, true);
                    });
                } catch (err) {
                    addSystemMessage('Izin mikrofon ditolak atau perangkat tidak mendukung.');
                }
            } else {
                if (localStream) localStream.getAudioTracks().forEach(t => t.enabled = false);
                micEnabled = false;
                btnMic.innerText = '🎤 Mic: OFF';
                btnMic.style.background = '#ef4444';
                setSpeakingIndicator(player, false);
                socket.emit('voice-state', false);
                addSystemMessage('Mikrofon dimatikan.');
            }
        };
    }

    if (socket) {
        socket.on('voice-signal', async d => {
            const pc = createPeer(d.from, false);
            if (d.signal.sdp) {
                await pc.setRemoteDescription(new RTCSessionDescription(d.signal.sdp));
                if (d.signal.sdp.type === 'offer') {
                    const answer = await pc.createAnswer();
                    await pc.setLocalDescription(answer);
                    socket.emit('voice-signal', { to: d.from, signal: { sdp: pc.localDescription } });
                }
            } else if (d.signal.candidate) {
                await pc.addIceCandidate(new RTCIceCandidate(d.signal.candidate));
            }
        });

        socket.on('voice-state', d => {
            const r = remotes.get(d.id);
            if (r) setSpeakingIndicator(r.av, d.speaking);
        });

        socket.on('join', p => {
            if (micEnabled) createPeer(p.id, true);
        });

        socket.on('leave', id => {
            const pc = peers.get(id);
            if (pc) { pc.close(); peers.delete(id); }
            const audio = document.getElementById('audio-' + id);
            if (audio) audio.remove();
        });
    }

})();
