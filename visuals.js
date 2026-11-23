// =========================================================
// VISUALS: detail tambahan (dimuat setelah main.js, sebelum online.js)
// =========================================================
(function () {
    'use strict';
    window.frameHooks = window.frameHooks || [];
    const hooks = window.frameHooks;
    const zoneGroup = z => scene.children.find(o => o.isGroup && o.position.x === z.pos[0] && o.position.z === z.pos[2]);

    // ---------- tekstur lantai ----------
    function tileTexture(base, line, wood) {
        const c = document.createElement('canvas');
        c.width = c.height = 64;
        const x = c.getContext('2d');
        x.fillStyle = base; x.fillRect(0, 0, 64, 64);
        x.strokeStyle = line; x.lineWidth = 2;
        if (wood) { for (let i = 0; i < 4; i++) { x.strokeRect(0, i * 16, 64, 16); x.beginPath(); x.moveTo(i % 2 ? 20 : 44, i * 16); x.lineTo(i % 2 ? 20 : 44, i * 16 + 16); x.stroke(); } }
        else x.strokeRect(1, 1, 62, 62);
        const t = new THREE.CanvasTexture(c);
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(wood ? 3 : 4.5, wood ? 3 : 4.5);
        return t;
    }
    const padTex = tileTexture('#ffffff', '#cbd5e1', false);
    const woodTex = tileTexture('#ffffff', '#c9a577', true);
    scene.children.forEach(m => {
        const p = m.isMesh && m.geometry.parameters;
        if (p && p.width === 10 && p.height === 0.15 && p.depth === 10) { m.material.map = padTex; m.material.needsUpdate = true; }
    });

    // ---------- detail bangunan ----------
    campusZones.forEach((z, i) => {
        const g = zoneGroup(z), s = zoneShells[z.id];
        if (!g || !s) return;
        g.children.forEach(m => {
            const p = m.isMesh && m.geometry.parameters;
            if (p && Math.abs(p.width - 9.4) < 1e-6 && p.height === 0.03) {
                m.material.map = ['library', 'meeting', 'hall', 'classroom'].includes(z.id) ? woodTex : padTex;
                m.material.needsUpdate = true;
            }
        });
        // atap: pagar atap + skylight + perlengkapan
        const roof = s.roof, rim = new THREE.Color(z.color).multiplyScalar(0.75);
        mk(roof, 10.8, 0.45, 0.3, rim, 0, 0.38, 5.25); mk(roof, 10.8, 0.45, 0.3, rim, 0, 0.38, -5.25);
        mk(roof, 0.3, 0.45, 10.8, rim, 5.25, 0.38, 0); mk(roof, 0.3, 0.45, 10.8, rim, -5.25, 0.38, 0);
        mk(roof, 2.2, 0.2, 2.2, 0xbae6fd, 0, 0.25, 0, { transparent: true, opacity: 0.7, roughness: 0.1 });
        if (i % 2 === 0) mk(roof, 1.2, 0.6, 0.8, 0xe2e8f0, 3.2, 0.45, -3);
        if (i % 3 === 0) { const sp = mk(roof, 2.4, 0.08, 1.4, 0x1e3a8a, -3, 0.4, 2.5); sp.rotation.x = -0.3; }
        if (i % 3 === 1) cyl(roof, 0.6, 0.6, 1.1, 0x94a3b8, -3.5, 0.7, -3);
        // kanopi pintu
        for (let k = 0; k < 5; k++) { const a = mk(g, 0.6, 0.12, 1.3, k % 2 ? 0xffffff : z.color, -1.2 + k * 0.6, 3.05, 5.5); a.rotation.x = 0.25; }
        [-1.4, 1.4].forEach(x => cyl(g, 0.05, 0.05, 3, 0xe2e8f0, x, 1.5, 6.0, null, 8));
        plant(g, -2.2, 5.5); plant(g, 2.2, 5.5);
        // bingkai jendela
        [-3.15, 3.15].forEach(x => { mk(g, 1.8, 1.4, 0.08, 0xffffff, x, 2.0, 5.0); mk(g, 1.95, 0.08, 0.3, 0xe2e8f0, x, 1.3, 5.12); mk(g, 0.06, 1.2, 0.1, 0xffffff, x, 2.0, 5.07); });
        [-1, 1].forEach(sd => [-2.5, 2.5].forEach(zz => { mk(g, 0.08, 1.4, 2.4, 0xffffff, sd * 5.0, 2.0, zz); mk(g, 0.3, 0.08, 2.5, 0xe2e8f0, sd * 5.12, 1.3, zz); }));
    });

    // ---------- pagar, gerbang, mobil ----------
    function hedge(x0, z0, x1, z1) {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = Math.abs(x1 - x0) || 0.8, d = Math.abs(z1 - z0) || 0.8;
        mk(scene, w, 1.4, d, 0x15803d, cx, 0.7, cz);
        mk(scene, w - 0.1, 0.5, d - 0.1, 0x22c55e, cx, 1.55, cz);
        wallBoxes.push({ minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2 });
    }
    hedge(-36, -36, 36, -36); hedge(-36, 36, -5, 36); hedge(5, 36, 36, 36); hedge(-36, -36, -36, 36); hedge(36, -36, 36, 36);
    const ps = [-36, -24, -12, 0, 12, 24, 36];
    function post(x, z) {
        mk(scene, 0.9, 2.2, 0.9, 0x9a3412, x, 1.1, z); mk(scene, 1.1, 0.15, 1.1, 0xe5e7eb, x, 2.27, z);
        sph(scene, 0.18, 0xfde68a, x, 2.55, z, { emissive: 0xfbbf24, emissiveIntensity: 0.8 });
    }
    ps.forEach(v => { post(v, -36); post(-36, v); post(36, v); if (Math.abs(v) > 8) post(v, 36); });
    [-5, 5].forEach(x => { mk(scene, 1.4, 4.6, 1.4, 0x7c2d12, x, 2.3, 36); sph(scene, 0.4, 0xfacc15, x, 5.0, 36, { emissive: 0xfacc15, emissiveIntensity: 0.6 }); });
    mk(scene, 11.4, 1, 1.1, 0x1e3a8a, 0, 4.3, 36);
    const gateSign = makeLabel('BISPRO UNIVERSITY', { w: 512, h: 96, bg: 'rgba(0,0,0,0)', sw: 7, sh: 1.3 });
    gateSign.position.set(0, 4.3, 36.7); scene.add(gateSign);
    mk(scene, 3, 0.08, 22, 0xcbd5e1, 0, 0, 27).castShadow = false;
    mk(scene, 2.8, 0.085, 22, 0xe2e8f0, 0, 0, 27).castShadow = false;

    function car(x, z, color) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        mk(g, 2.2, 0.6, 4.2, color, 0, 0.75, 0);
        mk(g, 1.9, 0.6, 2.2, new THREE.Color(color).lerp(WHITE, 0.2), 0, 1.35, -0.2);
        mk(g, 1.95, 0.42, 1.9, 0x1e293b, 0, 1.38, -0.2, { transparent: true, opacity: 0.8, roughness: 0.1 });
        [[-1.1, 1.3], [1.1, 1.3], [-1.1, -1.3], [1.1, -1.3]].forEach(w => { const wh = cyl(g, 0.42, 0.42, 0.3, 0x111827, w[0], 0.42, w[1]); wh.rotation.z = Math.PI / 2; });
        [-0.7, 0.7].forEach(lx => { mk(g, 0.4, 0.2, 0.08, 0xfef9c3, lx, 0.85, 2.12, { emissive: 0xfde047, emissiveIntensity: 0.8 }); mk(g, 0.4, 0.2, 0.08, 0xef4444, lx, 0.85, -2.12, { emissive: 0xdc2626, emissiveIntensity: 0.5 }); });
        scene.add(g);
        wallBoxes.push({ minX: x - 1.2, maxX: x + 1.2, minZ: z - 2.2, maxZ: z + 2.2 });
    }
    car(-9, 30, 0xef4444); car(-15, 29, 0x2563eb); car(9, 31, 0xfacc15); car(15, 30, 0xf8fafc);

    // ---------- air mancur hidup ----------
    const plazaG = zoneGroup(campusZones[0]);
    const drops = [];
    for (let i = 0; i < 28; i++) {
        const d = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), new THREE.MeshBasicMaterial({ color: 0xbae6fd, transparent: true, opacity: 0.85 }));
        plazaG.add(d); drops.push(d);
    }
    hooks.push((dt, t) => {
        drops.forEach((d, i) => {
            const u = (t * 0.7 + i / drops.length) % 1, a = i * 2.4;
            const r = 0.1 + u * 1.25;
            d.position.set(Math.cos(a) * r, 0.5 + 2.4 * 4 * u * (1 - u) + 1.4 * (1 - u) * 0, 0.5 + Math.sin(a) * r);
        });
    });

    // ---------- burung ----------
    const birds = [];
    for (let i = 0; i < 8; i++) {
        const b = new THREE.Group();
        mk(b, 0.3, 0.2, 0.6, 0x1e293b, 0, 0, 0).castShadow = false;
        const wings = [-1, 1].map(s => {
            const geo = new THREE.BoxGeometry(0.7, 0.04, 0.3); geo.translate(s * 0.35, 0, 0);
            const w = new THREE.Mesh(geo, M(0x334155)); w.userData.s = s; b.add(w); return w;
        });
        b.userData = { R: 18 + rnd() * 18, h: 16 + rnd() * 10, a: rnd() * 6.28, sp: (0.12 + rnd() * 0.1) * (i % 2 ? 1 : -1), wings: wings };
        b.scale.setScalar(1.6);
        scene.add(b); birds.push(b);
    }
    hooks.push((dt, t) => {
        birds.forEach(b => {
            const u = b.userData;
            u.a += u.sp * dt;
            b.position.set(Math.cos(u.a) * u.R, u.h + Math.sin(t + u.R) * 1.2, Math.sin(u.a) * u.R);
            b.rotation.y = Math.atan2(-Math.sin(u.a) * Math.sign(u.sp), Math.cos(u.a) * Math.sign(u.sp));
            u.wings.forEach(w => { w.rotation.z = w.userData.s * Math.sin(t * 9 + u.R) * 0.6; });
        });
    });

    // ---------- bayangan kecil di bawah karakter ----------
    function addBlob(g) {
        const b = new THREE.Mesh(new THREE.CircleGeometry(0.65, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
        b.rotation.x = -Math.PI / 2; b.position.y = 0.05;
        g.add(b); g.userData.blob = b;
    }
    const _create = createDetailedRobloxAvatar;
    createDetailedRobloxAvatar = function (c, p) { const g = _create(c, p); addBlob(g); return g; };
    npcAvatars.forEach(addBlob); addBlob(player);
    hooks.push(() => {
        [player].concat(window.remotePlayers || []).forEach(g => {
            if (g.userData.blob) g.userData.blob.position.y = (0.05 - (g.position.y - 0.1)) / g.scale.y;
        });
    });

    // ---------- mode siang / malam ----------
    function skyTexture(stops) {
        const c = document.createElement('canvas'); c.width = 2; c.height = 256;
        const x = c.getContext('2d'), gr = x.createLinearGradient(0, 0, 0, 256);
        stops.forEach((s, i) => gr.addColorStop(i / (stops.length - 1), s));
        x.fillStyle = gr; x.fillRect(0, 0, 2, 256);
        return new THREE.CanvasTexture(c);
    }
    const daySky = scene.background, nightSky = skyTexture(['#020617', '#0f172a', '#1e3a8a']);
    const moon = new THREE.Mesh(new THREE.SphereGeometry(3.5, 16, 12), new THREE.MeshBasicMaterial({ color: 0xf1f5f9, fog: false }));
    moon.position.set(-50, 55, -70); moon.visible = false; scene.add(moon);
    const sp = [];
    for (let i = 0; i < 500; i++) { const u = rnd() * Math.PI * 2, v = Math.acos(rnd() * 0.9 + 0.1); sp.push(130 * Math.sin(v) * Math.cos(u), 130 * Math.cos(v), 130 * Math.sin(v) * Math.sin(u)); }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, fog: false }));
    stars.visible = false; scene.add(stars);
    const nightLights = campusZones.map(z => { const l = new THREE.PointLight(0xffe2b0, 1.1, 15, 1.5); l.position.set(z.pos[0], 3, z.pos[2]); return l; });

    let night = false;
    const grp = document.createElement('div');
    grp.className = 'control-group';
    grp.innerHTML = '<span class="label">WORLD</span>';
    const nb = document.createElement('button');
    nb.className = 'btn-toggle'; nb.innerText = '🌙 Switch to Night';
    grp.appendChild(nb);
    document.getElementById('action-panel').appendChild(grp);
    nb.onclick = () => {
        night = !night;
        scene.background = night ? nightSky : daySky;
        scene.fog.color.setHex(night ? 0x0b1220 : 0xbae6fd);
        hemiLight.intensity = night ? 0.35 : 0.8; hemiLight.color.setHex(night ? 0x8aa4ff : 0xffffff);
        dirLight.intensity = night ? 0.22 : 0.9; dirLight.color.setHex(night ? 0x9db4ff : 0xfff4e0);
        sun.visible = !night; moon.visible = night; stars.visible = night;
        clouds.forEach(c => c.children.forEach(s => { s.material.color.setHex(night ? 0x475569 : 0xffffff); s.material.opacity = night ? 0.5 : 0.92; }));
        nightLights.forEach(l => night ? scene.add(l) : scene.remove(l));
        nb.innerText = night ? '☀️ Switch to Day' : '🌙 Switch to Night';
        addSystemMessage(night ? 'Night has fallen on campus.' : 'Good morning, campus!');
    };
})();