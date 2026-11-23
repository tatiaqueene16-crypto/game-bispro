// =========================================================
// 1. DATA 9 ZONA KAMPUS & 19 MAHASISWA BISPRO
// =========================================================
const campusZones = [
    { id: "plaza", name: "1. Plaza", activity: "Campus Networking", pos: [0, 0, 8], color: 0x38bdf8, desc: "Central hub where BISPRO students gather and network." },
    { id: "classroom", name: "2. Classroom", activity: "Group Discussion", pos: [-16, 0, -14], color: 0x2563eb, desc: "Interactive room for Business Communication lectures." },
    { id: "meeting", name: "3. Meeting Room", activity: "Business Meeting", pos: [0, 0, -16], color: 0x0d9488, desc: "Executive boardroom for simulated corporate meetings." },
    { id: "office", name: "4. Office", activity: "Job Interview", pos: [16, 0, -14], color: 0x4f46e5, desc: "Modern workspace for mock job interviews and HR roleplay." },
    { id: "hall", name: "5. Stage", activity: "Public Speaking", pos: [-18, 0, 2], color: 0xd97706, desc: "Main auditorium stage for startup pitching and speeches." },
    { id: "library", name: "6. Library", activity: "Business Research", pos: [18, 0, 2], color: 0x7c3aed, desc: "Quiet academic zone filled with international journals." },
    { id: "cafeteria", name: "7. Cafeteria", activity: "Casual Hangout", pos: [-15, 0, 16], color: 0xe11d48, desc: "Colorful student dining area for coffee breaks and chats." },
    { id: "lounge", name: "8. Lounge", activity: "Networking", pos: [0, 0, 18], color: 0x059669, desc: "Cozy sofa area to relax with classmates between sessions." },
    { id: "conference", name: "9. Conference", activity: "Negotiation", pos: [15, 0, 16], color: 0x9333ea, desc: "High-stakes summit room for cross-cultural negotiations." }
];

const studentsData = [
    { name: "1. Raka Pratama", role: "Class President", zone: "Plaza", bio: "Leads the BISPRO cohort and coordinates business events.", skills: ["Leadership", "Public Speaking"], quote: "Great leaders communicate with clarity.", casualColor: 0x1e293b, skin: 0xf1c27d, hair: 0x3e2723, pos: [-2, 0, 5] },
    { name: "2. Nadia Putri", role: "Secretary", zone: "Meeting Room", bio: "Specializes in corporate correspondence and minutes.", skills: ["Business Writing", "Email Etiquette"], quote: "Precision in words builds trust.", casualColor: 0xe11d48, skin: 0xffdbac, hair: 0x271c19, pos: [-2, 0, -16] },
    { name: "3. Dimas Saputra", role: "Startup Pitcher", zone: "Stage", bio: "Loves pitching innovative business models on stage.", skills: ["Pitching", "Persuasion"], quote: "Sell the vision, not just the product.", casualColor: 0x059669, skin: 0xe0ac69, hair: 0x0f172a, pos: [-18, 0, 0] },
    { name: "4. Alya Maharani", role: "PR Specialist", zone: "Plaza", bio: "Passionate about media relations and brand storytelling.", skills: ["Networking", "PR Strategy"], quote: "Your network is your net worth.", casualColor: 0x7c3aed, skin: 0xf1c27d, hair: 0x3e2723, pos: [2.5, 0, 5.5] },
    { name: "5. Fajar Nugroho", role: "Business Analyst", zone: "Office", bio: "Prepares data-driven reports and interview simulations.", skills: ["Data Presentation", "Interviewing"], quote: "Facts speak loudest when structured well.", casualColor: 0xd97706, skin: 0xc68642, hair: 0x0f172a, pos: [15, 0, -14] },
    { name: "6. Salsabila Azzahra", role: "Debate Lead", zone: "Classroom", bio: "Active moderator during group discussions and debates.", skills: ["Critical Thinking", "Moderation"], quote: "Listen first, respond with impact.", casualColor: 0xdb2777, skin: 0xffdbac, hair: 0x1e293b, pos: [-17, 0, -13] },
    { name: "7. Bagas Adi", role: "Negotiator", zone: "Conference", bio: "Focuses on win-win international business negotiations.", skills: ["Negotiation", "Cross-Cultural Comm"], quote: "Every deal starts with empathy.", casualColor: 0x0284c7, skin: 0xe0ac69, hair: 0x0f172a, pos: [14, 0, 15] },
    { name: "8. Clarissa Tan", role: "Global Envoy", zone: "Conference", bio: "Fluent in cross-cultural etiquette and diplomatic English.", skills: ["Diplomacy", "Global Business"], quote: "Culture shapes how we connect.", casualColor: 0x9333ea, skin: 0xffdbac, hair: 0x3e2723, pos: [16.5, 0, 16] },
    { name: "9. Reza Mahendra", role: "HR Recruiter", zone: "Office", bio: "Plays the hiring manager in mock corporate interviews.", skills: ["HR Interview", "Talent Assessment"], quote: "Confidence is preparation meeting opportunity.", casualColor: 0x4f46e5, skin: 0xc68642, hair: 0x0f172a, pos: [17.5, 0, -13] },
    { name: "10. Tiara Kusuma", role: "Keynote Speaker", zone: "Stage", bio: "Practices TED-style public speaking and vocal delivery.", skills: ["Public Speaking", "Storytelling"], quote: "Own the stage with authenticity.", casualColor: 0xf59e0b, skin: 0xf1c27d, hair: 0x271c19, pos: [-16, 0, 3] },
    { name: "11. Kevin Wijaya", role: "Researcher", zone: "Library", bio: "Analyzes Harvard business cases and market trends.", skills: ["Research", "Academic Writing"], quote: "Knowledge fuels persuasive arguments.", casualColor: 0x0d9488, skin: 0xffdbac, hair: 0x0f172a, pos: [17, 0, 1] },
    { name: "12. Intan Permata", role: "Editorial Writer", zone: "Library", bio: "Drafts press releases and executive summaries.", skills: ["Copywriting", "Editing"], quote: "Good writing is clear thinking made visible.", casualColor: 0xec4899, skin: 0xf1c27d, hair: 0x3e2723, pos: [19, 0, 3] },
    { name: "13. Gilang Ramadhan", role: "Community Host", zone: "Cafeteria", bio: "Organizes casual English coffee talks and hangouts.", skills: ["Small Talk", "Social Networking"], quote: "Best ideas happen over coffee.", casualColor: 0xef4444, skin: 0xe0ac69, hair: 0x0f172a, pos: [-16, 0, 15] },
    { name: "14. Maya Angelita", role: "Event Host", zone: "Cafeteria", bio: "Coordinates campus networking mixers and events.", skills: ["Event Hosting", "Interpersonal Skills"], quote: "Warmth opens every professional door.", casualColor: 0x8b5cf6, skin: 0xffdbac, hair: 0x271c19, pos: [-14, 0, 17] },
    { name: "15. Hendra Gunawan", role: "Project Coord", zone: "Meeting Room", bio: "Keeps team timelines and meetings on track.", skills: ["Time Management", "Team Alignment"], quote: "Structure empowers creativity.", casualColor: 0x10b981, skin: 0xc68642, hair: 0x0f172a, pos: [2, 0, -15] },
    { name: "16. Dinda Larasati", role: "Peer Mentor", zone: "Lounge", bio: "Helps fellow students practice conversational fluency.", skills: ["Coaching", "Active Listening"], quote: "We grow faster when we practice together.", casualColor: 0x06b6d4, skin: 0xf1c27d, hair: 0x3e2723, pos: [-1.5, 0, 17.5] },
    { name: "17. Arif Rahman", role: "Media Presenter", zone: "Classroom", bio: "Combines digital slides with verbal explanations.", skills: ["Visual Comm", "Group Discussion"], quote: "Design supports the message.", casualColor: 0x3b82f6, skin: 0xe0ac69, hair: 0x0f172a, pos: [-14.5, 0, -14.5] },
    { name: "18. Bella Safira", role: "Client Relations", zone: "Lounge", bio: "Simulates customer success and conflict resolution.", skills: ["Conflict Resolution", "Empathy"], quote: "Turn challenges into partnerships.", casualColor: 0xf43f5e, skin: 0xffdbac, hair: 0x1e293b, pos: [2, 0, 18] },
    { name: "19. Yoga Pratama", role: "Ambassador", zone: "Plaza", bio: "Welcomes visitors and introduces the BISPRO program.", skills: ["Branding", "Campus Tour"], quote: "Proud to represent BISPRO!", casualColor: 0x14b8a6, skin: 0xf1c27d, hair: 0x0f172a, pos: [0, 0, 3.5] }
];

// =========================================================
// 2. SETUP SCENE, CAMERA & RENDERER
// =========================================================
const scene = new THREE.Scene();

// Langit gradasi
(function () {
    const c = document.createElement('canvas');
    c.width = 2; c.height = 256;
    const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#2f9bea');
    g.addColorStop(0.55, '#7dd3fc');
    g.addColorStop(1, '#e0f2fe');
    x.fillStyle = g; x.fillRect(0, 0, 2, 256);
    scene.background = new THREE.CanvasTexture(c);
})();
scene.fog = new THREE.Fog(0xbae6fd, 40, 105);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 160);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('canvas-container').appendChild(renderer.domElement);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x94a3b8, 0.8);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xfff4e0, 0.9);
dirLight.position.set(25, 45, 25);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
dirLight.shadow.camera.left = -50; dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.top = 50; dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.near = 1; dirLight.shadow.camera.far = 140;
dirLight.shadow.bias = -0.0006;
scene.add(dirLight);

// =========================================================
// 2b. HELPER MODEL (kotak, silinder, bola, label)
// =========================================================
const WHITE = new THREE.Color(0xffffff);
let _seed = 11;
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return (_seed - 1) / 2147483646; };

function M(c, ex) {
    return new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.75 }, ex || {}));
}
function mk(parent, w, h, d, c, x, y, z, ex) {
    const mat = (c && c.isMaterial) ? c : M(c, ex);
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true; m.receiveShadow = true;
    parent.add(m);
    return m;
}
function cyl(parent, rt, rb, h, c, x, y, z, ex, seg) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 16), M(c, ex));
    m.position.set(x, y, z);
    m.castShadow = true; m.receiveShadow = true;
    parent.add(m);
    return m;
}
function sph(parent, r, c, x, y, z, ex) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), M(c, ex));
    m.position.set(x, y, z);
    m.castShadow = true;
    parent.add(m);
    return m;
}
function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}
function makeLabel(text, o) {
    o = o || {};
    const cw = o.w || 256, ch = o.h || 64;
    const c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    const x = c.getContext('2d');
    x.fillStyle = o.bg || 'rgba(15,23,42,0.78)';
    rr(x, 2, 2, cw - 4, ch - 4, ch * 0.28); x.fill();
    x.fillStyle = o.fg || '#ffffff';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    if (o.sub) {
        x.font = `bold ${Math.round(ch * 0.4)}px Segoe UI, Arial, sans-serif`;
        x.fillText(text, cw / 2, ch * 0.38);
        x.font = `600 ${Math.round(ch * 0.24)}px Segoe UI, Arial, sans-serif`;
        x.globalAlpha = 0.9;
        x.fillText(o.sub, cw / 2, ch * 0.74);
    } else {
        x.font = `bold ${Math.round(ch * 0.45)}px Segoe UI, Arial, sans-serif`;
        x.fillText(text, cw / 2, ch / 2 + 1);
    }
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    s.scale.set(o.sw || 2.2, o.sh || 0.55, 1);
    return s;
}
const hex6 = n => '#' + new THREE.Color(n).getHexString();

// =========================================================
// 3. DUNIA KAMPUS 3D & 9 ZONA
// =========================================================
// Tanah rumput bertekstur
const grassTex = (function () {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const x = c.getContext('2d');
    x.fillStyle = '#4ade80'; x.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 260; i++) {
        x.fillStyle = ['#3fcf74', '#58e08e', '#34c06a', '#6ee7a0'][i % 4];
        x.fillRect(Math.floor(rnd() * 64), Math.floor(rnd() * 64), 2, 2);
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(55, 55);
    t.magFilter = THREE.NearestFilter;
    return t;
})();
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshStandardMaterial({ map: grassTex, roughness: 0.95 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.05;
ground.receiveShadow = true;
scene.add(ground);

// Jalan setapak
[
    [0, 3, 3, 26],       // utara-selatan tengah
    [0, -7.5, 38, 3],
    [0, 2, 38, 3],
    [0, 12, 32, 3]
].forEach(p => {
    mk(scene, p[2], 0.08, p[3], 0xcbd5e1, p[0], 0, p[1]).castShadow = false;
    mk(scene, p[2] - 0.2, 0.085, p[3] - 0.2, 0xe2e8f0, p[0], 0, p[1]).castShadow = false;
});

// ---------- perabot ----------
function chair(g, x, z, ry, c) {
    const o = new THREE.Group();
    o.position.set(x, 0, z); o.rotation.y = ry || 0;
    c = c || 0x334155;
    mk(o, 0.5, 0.07, 0.5, c, 0, 0.5, 0);
    mk(o, 0.5, 0.55, 0.07, c, 0, 0.8, -0.22);
    mk(o, 0.08, 0.5, 0.08, 0x1f2937, 0, 0.25, 0);
    mk(o, 0.42, 0.04, 0.42, 0x1f2937, 0, 0.03, 0);
    g.add(o);
}
function desk(g, x, z, w, c) {
    mk(g, w, 0.08, 0.8, c || 0xa16207, x, 0.85, z);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(s => mk(g, 0.07, 0.85, 0.07, 0x475569, x + s[0] * (w / 2 - 0.08), 0.42, z + s[1] * 0.32));
}
function plant(g, x, z) {
    cyl(g, 0.22, 0.17, 0.35, 0xb45309, x, 0.18, z);
    sph(g, 0.36, 0x22c55e, x, 0.72, z);
    sph(g, 0.25, 0x16a34a, x + 0.15, 0.98, z + 0.05);
}
function sofa(g, x, z, ry, c) {
    const o = new THREE.Group();
    o.position.set(x, 0, z); o.rotation.y = ry || 0;
    const l = new THREE.Color(c).lerp(WHITE, 0.25);
    mk(o, 2.2, 0.45, 0.9, c, 0, 0.3, 0);
    mk(o, 2.2, 0.6, 0.22, c, 0, 0.8, -0.34);
    mk(o, 0.25, 0.35, 0.9, c, -1.12, 0.58, 0);
    mk(o, 0.25, 0.35, 0.9, c, 1.12, 0.58, 0);
    mk(o, 0.95, 0.18, 0.7, l, -0.5, 0.58, 0.05);
    mk(o, 0.95, 0.18, 0.7, l, 0.5, 0.58, 0.05);
    g.add(o);
}
function lamp(g, x, z) {
    cyl(g, 0.06, 0.08, 3, 0x334155, x, 1.5, z);
    sph(g, 0.22, 0xfde68a, x, 3.1, z, { emissive: 0xfbbf24, emissiveIntensity: 0.9 });
}
function shelf(g, x, z, ry) {
    const o = new THREE.Group();
    o.position.set(x, 0, z); o.rotation.y = ry || 0;
    const wood = 0x78350f;
    mk(o, 0.1, 3, 0.5, wood, -1.45, 1.5, 0);
    mk(o, 0.1, 3, 0.5, wood, 1.45, 1.5, 0);
    mk(o, 2.9, 0.1, 0.5, wood, 0, 3, 0);
    mk(o, 2.8, 3, 0.08, 0x451a03, 0, 1.5, -0.21);
    const pal = [0xef4444, 0x3b82f6, 0xf59e0b, 0x10b981, 0x8b5cf6, 0xec4899, 0xf8fafc, 0x0ea5e9];
    [0.05, 0.8, 1.5, 2.2].forEach(py => {
        mk(o, 2.8, 0.06, 0.45, wood, 0, py, 0);
        for (let k = 0; k < 10; k++) {
            const bh = 0.38 + rnd() * 0.25;
            mk(o, 0.2, bh, 0.3, pal[Math.floor(rnd() * pal.length)], -1.2 + k * 0.265, py + 0.03 + bh / 2, 0.02);
        }
    });
    g.add(o);
}
function flag(g, x, z, c1, c2) {
    cyl(g, 0.04, 0.04, 3.4, 0xcbd5e1, x, 1.7, z, null, 8);
    mk(g, 0.9, 0.3, 0.03, c1, x + 0.47, 3.15, z);
    mk(g, 0.9, 0.3, 0.03, c2, x + 0.47, 2.85, z);
}

// ---------- bangunan per zona ----------
const wallBoxes = [];
const zoneShells = {};
function shell(g, zone) {
    const px = zone.pos[0], pz = zone.pos[2];
    const wc = new THREE.Color(zone.color).lerp(WHITE, 0.6);
    const wallMat = M(wc, { transparent: true });
    const trimMat = M(zone.color, { transparent: true });
    const glassMat = M(0xbae6fd, { transparent: true, opacity: 0.45, roughness: 0.1 });
    const wall = (w, h, d, x, y, z) => {
        mk(g, w, h, d, wallMat, x, y, z);
        wallBoxes.push({ minX: px + x - w / 2, maxX: px + x + w / 2, minZ: pz + z - d / 2, maxZ: pz + z + d / 2 });
    };
    wall(10, 3.6, 0.3, 0, 1.8, -4.85);          // dinding belakang
    wall(0.3, 3.6, 10, -4.85, 1.8, 0);          // dinding kiri
    wall(0.3, 3.6, 10, 4.85, 1.8, 0);           // dinding kanan
    wall(3.7, 3.6, 0.3, -3.15, 1.8, 4.85);      // depan kiri (pintu di tengah)
    wall(3.7, 3.6, 0.3, 3.15, 1.8, 4.85);       // depan kanan
    mk(g, 2.6, 0.8, 0.3, trimMat, 0, 3.2, 4.85);                    // atas pintu
    [-1.4, 1.4].forEach(x => mk(g, 0.2, 2.8, 0.34, trimMat, x, 1.4, 4.85)); // kusen pintu
    mk(g, 2.2, 0.03, 0.9, 0x1f2937, 0, 0.02, 5.3);                  // keset
    [-3.15, 3.15].forEach(x => mk(g, 1.6, 1.2, 0.06, glassMat, x, 2.0, 5.03));
    [-1, 1].forEach(s => [-2.5, 2.5].forEach(z => mk(g, 0.06, 1.2, 2.2, glassMat, s * 5.03, 2.0, z)));
    mk(g, 9.4, 0.03, 9.4, new THREE.Color(zone.color).lerp(WHITE, 0.8), 0, 0.01, 0).castShadow = false;
    const roofMat = M(zone.color, { roughness: 0.6 });
    const roof = mk(g, 10.8, 0.3, 10.8, roofMat, 0, 3.75, 0);
    roof.castShadow = false;
    const lab = makeLabel(zone.name.replace(/^\d+\.\s*/, ''), { sub: zone.activity, w: 512, h: 128, bg: hex6(zone.color), sw: 5.2, sh: 1.3 });
    lab.position.set(0, 4.6, 5.0);
    g.add(lab);
    zoneShells[zone.id] = { roof: roof, mats: [wallMat, trimMat] };
}

const zoneAnimated = {};

function buildZone(zone) {
    const g = new THREE.Group();
    g.position.set(zone.pos[0], 0.1, zone.pos[2]);
    scene.add(g);
    if (zone.id !== 'plaza') shell(g, zone);

    switch (zone.id) {
        case 'plaza': {
            // Air mancur
            cyl(g, 1.7, 1.8, 0.4, 0xcbd5e1, 0, 0.2, 0.5);
            cyl(g, 1.45, 1.45, 0.34, 0x38bdf8, 0, 0.26, 0.5, { transparent: true, opacity: 0.85, emissive: 0x0369a1, emissiveIntensity: 0.3 });
            cyl(g, 0.22, 0.28, 1.3, 0xe2e8f0, 0, 0.8, 0.5);
            cyl(g, 0.7, 0.3, 0.2, 0xe2e8f0, 0, 1.4, 0.5);
            zoneAnimated.jet = cyl(g, 0.06, 0.1, 1, 0x93c5fd, 0, 2.0, 0.5, { transparent: true, opacity: 0.7 });
            sph(g, 0.16, 0xbae6fd, 0, 2.55, 0.5, { emissive: 0x38bdf8 });
            // Gerbang BISPRO
            [-3.2, 3.2].forEach(px => { mk(g, 0.5, 3.4, 0.5, 0x1d4ed8, px, 1.7, -5.3); sph(g, 0.3, 0x38bdf8, px, 3.6, -5.3, { emissive: 0x38bdf8, emissiveIntensity: 0.7 }); });
            mk(g, 7.2, 0.9, 0.4, 0x1e3a8a, 0, 3.2, -5.3);
            const sign = makeLabel('BISPRO UNIVERSITY', { w: 512, h: 96, bg: 'rgba(0,0,0,0)', sw: 6.4, sh: 1.2 });
            sign.position.set(0, 3.2, -5.05); g.add(sign);
            // Bangku
            [[-4.2, 0.8, Math.PI / 2], [4.2, 0.8, -Math.PI / 2], [-4.2, 3.2, Math.PI / 2], [4.2, 3.2, -Math.PI / 2]].forEach(b => {
                const o = new THREE.Group(); o.position.set(b[0], 0, b[1]); o.rotation.y = b[2];
                mk(o, 1.6, 0.1, 0.5, 0xa16207, 0, 0.5, 0); mk(o, 1.6, 0.5, 0.08, 0xa16207, 0, 0.8, -0.22);
                mk(o, 0.1, 0.5, 0.45, 0x334155, -0.7, 0.25, 0); mk(o, 0.1, 0.5, 0.45, 0x334155, 0.7, 0.25, 0);
                g.add(o);
            });
            // Taman bunga
            [[-4.3, -4.3], [4.3, -4.3], [-4.3, 4.3], [4.3, 4.3]].forEach(p => {
                mk(g, 1.4, 0.3, 1.4, 0x7c4a1e, p[0], 0.15, p[1]);
                for (let i = 0; i < 6; i++) sph(g, 0.14, [0xf43f5e, 0xfacc15, 0xf472b6, 0xffffff][i % 4], p[0] - 0.5 + (i % 3) * 0.5, 0.42, p[1] - 0.3 + Math.floor(i / 3) * 0.6);
            });
            // Tiang bendera
            cyl(g, 0.05, 0.05, 4.4, 0xcbd5e1, 5.4, 2.2, -2, null, 8);
            mk(g, 1.2, 0.8, 0.03, 0x2563eb, 6.0, 3.9, -2);
            lamp(g, -2.6, 2.2); lamp(g, 2.6, 2.2);
            break;
        }
        case 'classroom': {
            mk(g, 6.3, 2.3, 0.06, 0x1e293b, 0, 2.1, -4.65);
            mk(g, 6, 2, 0.08, 0xffffff, 0, 2.1, -4.6);
            mk(g, 4, 0.08, 0.02, 0x2563eb, -0.8, 2.5, -4.54);
            mk(g, 2.4, 0.08, 0.02, 0xef4444, -1.5, 2.2, -4.54);
            mk(g, 3, 0.08, 0.02, 0x16a34a, -1.0, 1.9, -4.54);
            cyl(g, 0.3, 0.3, 0.06, 0xffffff, 3.9, 3.2, -4.65, null, 20).rotation.x = Math.PI / 2;
            [[-3.4, -1], [3.4, -1], [-3.4, 2.6], [3.4, 2.6]].forEach(d => {
                desk(g, d[0], d[1], 1.7, 0xd6a35c);
                chair(g, d[0] - 0.4, d[1] + 0.95, Math.PI, 0x2563eb);
                chair(g, d[0] + 0.4, d[1] + 0.95, Math.PI, 0x3b82f6);
                mk(g, 0.5, 0.03, 0.35, 0xffffff, d[0], 0.9, d[1]);
            });
            mk(g, 1.6, 0.9, 0.8, 0x92400e, 0, 0.45, -3.9);
            plant(g, 4.4, -4.2);
            break;
        }
        case 'meeting': {
            mk(g, 4.2, 2.2, 0.1, 0x0f172a, 0, 2.3, -4.62);
            mk(g, 4, 2, 0.02, 0x38bdf8, 0, 2.3, -4.55, { emissive: 0x0284c7, emissiveIntensity: 0.7 });
            mk(g, 3.2, 0.12, 1.5, 0x5b3a29, 0, 0.85, 0);
            mk(g, 0.5, 0.8, 0.6, 0x1f2937, 0, 0.4, 0);
            mk(g, 0.6, 0.02, 0.4, 0xf8fafc, -0.8, 0.92, 0.2);
            cyl(g, 0.14, 0.12, 0.2, 0xffffff, 0.7, 1.0, -0.1);
            [-1, 0, 1].forEach(x => { chair(g, x, 1.35, Math.PI, 0x0d9488); chair(g, x, -1.35, 0, 0x0d9488); });
            plant(g, -4.3, -4.2); plant(g, 4.3, -4.2);
            mk(g, 0.8, 1.2, 0.5, 0x475569, 4.1, 0.6, 1.5);
            break;
        }
        case 'office': {
            [-3.2, 0, 3.2].forEach(x => {
                desk(g, x, -3.3, 2, 0xe2e8f0);
                mk(g, 0.75, 0.45, 0.05, 0x111827, x, 1.2, -3.5);
                mk(g, 0.68, 0.38, 0.02, 0x60a5fa, x, 1.2, -3.47, { emissive: 0x2563eb, emissiveIntensity: 0.6 });
                mk(g, 0.1, 0.2, 0.1, 0x111827, x, 0.99, -3.5);
                mk(g, 0.5, 0.03, 0.18, 0x1f2937, x, 0.91, -3.0);
                chair(g, x, -2.3, Math.PI, 0x4f46e5);
            });
            mk(g, 0.9, 1.6, 0.6, 0x94a3b8, 4.3, 0.8, -4.2);
            plant(g, -4.3, -4.2);
            // Meja wawancara
            desk(g, 0, 2.6, 1.8, 0xd6a35c);
            chair(g, -0.5, 3.6, Math.PI, 0x6366f1); chair(g, 0.5, 1.6, 0, 0x6366f1);
            mk(g, 0.45, 0.03, 0.3, 0xffffff, 0, 0.9, 2.6);
            break;
        }
        case 'hall': {
            mk(g, 9.2, 0.45, 2.3, 0x78350f, 0, 0.22, -3.65);
            mk(g, 9.2, 0.04, 2.3, 0xb45309, 0, 0.46, -3.65);
            mk(g, 8, 3.2, 0.1, 0x7c2d12, 0, 2.0, -4.6);
            [-1, 1].forEach(s => { mk(g, 1.6, 3.4, 0.4, 0xb91c1c, s * 3.9, 1.8, -4.3); mk(g, 1.0, 3.4, 0.3, 0x991b1b, s * 3.0, 1.8, -4.35); });
            mk(g, 7, 0.5, 0.35, 0xb91c1c, 0, 3.4, -4.3);
            mk(g, 0.7, 1.0, 0.5, 0x92400e, 2.7, 1.0, -3.6);
            cyl(g, 0.02, 0.02, 1.3, 0x111827, 0.2, 1.1, -3.3, null, 6);
            sph(g, 0.07, 0x111827, 0.2, 1.8, -3.3);
            [-2.5, 2.5].forEach(x => {
                cyl(g, 0.25, 0.4, 0.5, 0x1f2937, x, 3.4, -2.7);
                cyl(g, 0.1, 0.1, 0.05, 0xfde68a, x, 3.1, -2.7, { emissive: 0xfbbf24, emissiveIntensity: 1 });
            });
            [-3.4, 3.4].forEach(x => { chair(g, x, 3.4, Math.PI, 0xd97706); chair(g, x + (x < 0 ? 1.0 : -1.0), 3.4, Math.PI, 0xd97706); });
            break;
        }
        case 'library': {
            shelf(g, -3, -4.4, 0); shelf(g, 0, -4.4, 0); shelf(g, 3, -4.4, 0);
            shelf(g, -4.5, -0.8, Math.PI / 2); shelf(g, 4.5, -0.8, -Math.PI / 2);
            desk(g, 0, 3.2, 2.4, 0x92400e);
            chair(g, -0.6, 4.1, Math.PI, 0x6d28d9); chair(g, 0.6, 4.1, Math.PI, 0x6d28d9);
            mk(g, 0.5, 0.04, 0.35, 0xf8fafc, -0.5, 0.9, 3.2); mk(g, 0.5, 0.04, 0.35, 0xfde68a, 0.5, 0.9, 3.2);
            cyl(g, 0.03, 0.03, 0.4, 0x111827, 1.0, 1.1, 3.1, null, 6);
            sph(g, 0.15, 0xfde68a, 1.0, 1.35, 3.1, { emissive: 0xfbbf24, emissiveIntensity: 0.9 });
            cyl(g, 0.06, 0.12, 0.7, 0x78350f, -3.5, 0.35, 2.8);
            sph(g, 0.4, 0x3b82f6, -3.5, 1.1, 2.8);
            break;
        }
        case 'cafeteria': {
            mk(g, 6.5, 1.1, 1.0, 0x7f1d1d, 0, 0.55, -3.8);
            mk(g, 6.7, 0.1, 1.2, 0xf8fafc, 0, 1.15, -3.8);
            mk(g, 0.5, 0.5, 0.4, 0x111827, -1.5, 1.45, -3.8); cyl(g, 0.1, 0.1, 0.3, 0xef4444, -1.5, 1.8, -3.8);
            mk(g, 0.6, 0.35, 0.4, 0xcbd5e1, 1.5, 1.33, -3.8);
            mk(g, 2.6, 0.9, 0.06, 0x1e293b, 0, 2.5, -4.6);
            mk(g, 2.4, 0.7, 0.02, 0xfef3c7, 0, 2.5, -4.55);
            [[-3.4, -1.5], [3.4, 1.8]].forEach((t, i) => {
                cyl(g, 0.85, 0.85, 0.08, 0xf8fafc, t[0], 0.9, t[1]);
                cyl(g, 0.08, 0.08, 0.9, 0x475569, t[0], 0.45, t[1]);
                [[1.1, 0], [-1.1, 0], [0, 1.1], [0, -1.1]].forEach(s => cyl(g, 0.28, 0.28, 0.07, i ? 0xfb7185 : 0xfbbf24, t[0] + s[0], 0.55, t[1] + s[1]));
                cyl(g, 0.12, 0.12, 0.2, 0xffffff, t[0], 1.04, t[1]);
            });
            cyl(g, 0.04, 0.04, 2.6, 0xcbd5e1, -3.4, 1.3, -1.5, null, 8);
            const umb = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.6, 12), M(0xe11d48)); umb.position.set(-3.4, 2.75, -1.5); umb.castShadow = true; g.add(umb);
            plant(g, 4.3, -4.2);
            break;
        }
        case 'lounge': {
            mk(g, 6.5, 0.03, 4.8, 0x34d399, 0, 0.03, 0).castShadow = false;
            mk(g, 5.8, 0.035, 4.1, 0xa7f3d0, 0, 0.035, 0).castShadow = false;
            sofa(g, -2.4, -3.7, 0, 0x059669); sofa(g, 2.4, -3.7, 0, 0x0891b2);
            sofa(g, -4.0, 0.8, Math.PI / 2, 0xf59e0b);
            mk(g, 1.6, 0.4, 0.9, 0xd6a35c, 0, 0.2, -1.9);
            cyl(g, 0.15, 0.15, 0.2, 0xffffff, 0.3, 0.5, -1.9);
            [[3.8, 2.6, 0xf43f5e], [3.2, 3.5, 0x8b5cf6]].forEach(b => { const s = sph(g, 0.6, b[2], b[0], 0.45, b[1]); s.scale.set(1, 0.7, 1); });
            lamp(g, 4.3, -3.8); plant(g, -4.3, -4.3); plant(g, 4.3, 4.3);
            break;
        }
        case 'conference': {
            const t = cyl(g, 1, 1, 0.14, 0x3b2314, 0, 0.9, -3.2); t.scale.set(2.8, 1, 0.85);
            const b = cyl(g, 0.5, 0.7, 0.85, 0x1f2937, 0, 0.45, -3.2); b.scale.set(1.5, 1, 0.8);
            sph(g, 0.3, 0x2563eb, 0, 1.3, -3.2, { emissive: 0x1d4ed8, emissiveIntensity: 0.4 });
            [-1.6, 0, 1.6].forEach(x => chair(g, x, -2.0, Math.PI, 0x7e22ce));
            [-3.4, 3.4].forEach(x => chair(g, x, -3.2, x < 0 ? Math.PI / 2 : -Math.PI / 2, 0x7e22ce));
            flag(g, -3.6, -4.4, 0xef4444, 0xffffff);
            flag(g, -0.3, -4.4, 0x1d4ed8, 0xffffff);
            flag(g, 3.0, -4.4, 0xdc2626, 0x1e3a8a);
            plant(g, -4.3, 3.6); plant(g, 4.3, 3.6);
            break;
        }
    }
}

// Pad lantai (sama seperti sebelumnya) + bangunan
campusZones.forEach(zone => {
    const pad = new THREE.Mesh(
        new THREE.BoxGeometry(10, 0.15, 10),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc })
    );
    pad.position.set(zone.pos[0], 0.02, zone.pos[2]);
    pad.receiveShadow = true;
    scene.add(pad);

    const border = new THREE.Mesh(
        new THREE.BoxGeometry(10.3, 0.1, 10.3),
        new THREE.MeshStandardMaterial({ color: zone.color })
    );
    border.position.set(zone.pos[0], 0.01, zone.pos[2]);
    scene.add(border);

    buildZone(zone);
});

// ---------- dekorasi lingkungan ----------
function tree(x, z, s, kind) {
    const g = new THREE.Group();
    g.position.set(x, 0, z); g.scale.setScalar(s);
    cyl(g, 0.22, 0.32, 1.6, 0x78350f, 0, 0.8, 0, null, 8);
    if (kind === 0) {
        [[1.5, 1.6, 1.6], [1.15, 1.4, 2.5], [0.8, 1.2, 3.3]].forEach((c, i) => {
            const cone = new THREE.Mesh(new THREE.ConeGeometry(c[0], c[1], 8), M(i % 2 ? 0x15803d : 0x16a34a));
            cone.position.y = c[2]; cone.castShadow = true; g.add(cone);
        });
    } else {
        sph(g, 1.3, 0x22c55e, 0, 2.4, 0);
        sph(g, 0.9, 0x4ade80, 0.7, 3.0, 0.3);
        sph(g, 0.8, 0x16a34a, -0.7, 2.8, -0.3);
    }
    scene.add(g);
}
[[-8.5, -13], [8.5, -13], [-8.5, 9], [8.5, 9], [-9, -3], [9, -3], [-8.5, 20], [8.5, 21], [-26, -6], [26, -6], [-27, 10], [27, 10]].forEach((p, i) => tree(p[0], p[1], 0.9 + rnd() * 0.3, i % 2));
for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2 + rnd() * 0.2, r = 34 + rnd() * 14;
    tree(Math.cos(a) * r, Math.sin(a) * r, 1 + rnd() * 0.7, i % 3 === 0 ? 1 : 0);
}
// Tiang lampu sepanjang jalan
[-6, 6, 14].forEach(z => { lamp(scene, -2.2, z); lamp(scene, 2.2, z); });
// Bunga kecil
for (let i = 0; i < 90; i++) {
    const x = (rnd() - 0.5) * 56, z = (rnd() - 0.5) * 56;
    if (campusZones.some(zn => Math.abs(zn.pos[0] - x) < 6.5 && Math.abs(zn.pos[2] - z) < 6.5)) continue;
    if (Math.abs(x) < 2.2 || Math.abs(z + 7.5) < 2 || Math.abs(z - 2) < 2 || Math.abs(z - 12) < 2) continue;
    const f = sph(scene, 0.11, [0xf43f5e, 0xfacc15, 0xf472b6, 0xffffff, 0xa78bfa][i % 5], x, 0.12, z);
    f.castShadow = false;
}
// Bukit di kejauhan
for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2, r = 72 + rnd() * 6, h = 16 + rnd() * 14;
    const m = new THREE.Mesh(new THREE.ConeGeometry(14 + rnd() * 8, h, 6), M([0x5b8f6a, 0x6b9e7a, 0x7f9fb5][i % 3], { roughness: 1 }));
    m.position.set(Math.cos(a) * r, h / 2 - 0.5, Math.sin(a) * r);
    scene.add(m);
}
// Matahari & awan
const sun = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 12), new THREE.MeshBasicMaterial({ color: 0xfff7b0, fog: false }));
sun.position.set(55, 50, -70); scene.add(sun);
const clouds = [];
for (let i = 0; i < 12; i++) {
    const c = new THREE.Group();
    const cm = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.92, fog: false });
    for (let k = 0; k < 4; k++) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(3 + rnd() * 2.5, 10, 8), cm);
        s.position.set(k * 4 - 6, rnd() * 1.5, rnd() * 2); s.scale.y = 0.6; c.add(s);
    }
    c.position.set((rnd() - 0.5) * 170, 30 + rnd() * 12, -30 - rnd() * 60);
    c.userData.speed = 0.4 + rnd() * 0.5;
    scene.add(c); clouds.push(c);
}

// Render Tombol Zona di Atas
const zoneNav = document.getElementById('zone-nav');
zoneNav.innerHTML = '';
campusZones.forEach(zone => {
    const btn = document.createElement('button');
    btn.className = 'zone-btn';
    btn.innerText = zone.name;
    btn.onclick = () => {
        player.position.set(zone.pos[0], 0.1, zone.pos[2] + 3);
        addSystemMessage(`Teleported to ${zone.name} (${zone.activity})`);
    };
    zoneNav.appendChild(btn);
});

// =========================================================
// 4. PEMBUATAN AVATAR MANUSIA BLOK (ROBLOX STYLE) - BERAGAM
// =========================================================
// [gaya rambut, kacamata, warna celana, warna sepatu, skala tinggi, aksesori, warna rambut]
const LOOKS = {
    0:  ['short', 0, 0x1f2937, 0xf8fafc, 1.00, 'bag', null],
    1:  ['short', 0, 0x1f2937, 0xf8fafc, 1.05, '', null],
    2:  ['bob', 1, 0x334155, 0xe2e8f0, 0.96, '', 0x4b2e2b],
    3:  ['spiky', 0, 0x1e3a8a, 0xef4444, 1.00, '', null],
    4:  ['ponytail', 0, 0xd1d5db, 0xf472b6, 0.95, '', 0x7c2d12],
    5:  ['short', 1, 0x374151, 0x111827, 1.02, 'bag', null],
    6:  ['long', 0, 0x1e293b, 0xfda4af, 0.96, '', 0x111827],
    7:  ['cap', 0, 0x78716c, 0xf8fafc, 1.07, '', null],
    8:  ['long', 1, 0x4c1d95, 0xffffff, 0.97, 'scarf', 0x92400e],
    9:  ['spiky', 0, 0x1e293b, 0x111827, 1.05, '', 0x1c1917],
    10: ['bun', 0, 0x92400e, 0xffffff, 0.95, '', 0xca8a04],
    11: ['curly', 1, 0x1f2937, 0xf8fafc, 1.00, 'bag', null],
    12: ['ponytail', 1, 0x831843, 0xfbcfe8, 0.94, '', 0x3e2723],
    13: ['curly', 0, 0x0f766e, 0xf8fafc, 1.03, '', 0x1c1917],
    14: ['bob', 0, 0x6d28d9, 0xfde68a, 0.96, '', 0x7f1d1d],
    15: ['short', 1, 0x44403c, 0x1f2937, 1.08, '', 0x57534e],
    16: ['long', 0, 0x0e7490, 0xf8fafc, 0.95, 'bag', null],
    17: ['cap', 0, 0x1e293b, 0xf59e0b, 1.00, '', null],
    18: ['bun', 0, 0x9f1239, 0xffffff, 0.94, 'scarf', 0x1e293b],
    19: ['spiky', 0, 0x155e75, 0xf8fafc, 1.01, '', null]
};

function createDetailedRobloxAvatar(config, isPlayer = false) {
    const n = parseInt(config.name) || 0;
    const L = config.look || LOOKS[n] || LOOKS[0];
    const hairStyle = L[0], glasses = L[1], pantsCol = L[2], shoeCol = L[3], sz = L[4], extra = L[5];
    const group = new THREE.Group();

    const skin = config.skin || 0xf1c27d;
    const skinMat = M(skin);
    const hoodieColor = config.casualColor || (isPlayer ? 0x0ea5e9 : 0x1e293b);
    const shirtMat = M(hoodieColor, { roughness: 0.5 });
    const pantsMat = M(pantsCol, { roughness: 0.7 });
    const hairCol = (L[6] !== null && L[6] !== undefined) ? L[6] : (config.hair || 0x3e2723);
    const hairMat = M(hairCol, { roughness: 0.8 });
    const accent = new THREE.Color(hoodieColor).lerp(WHITE, 0.35).getHex();

    // Torso / Hoodie
    const torso = mk(group, 0.9, 1.0, 0.45, shirtMat, 0, 1.35, 0);
    mk(torso, 0.5, 0.35, 0.08, shirtMat, 0, -0.25, 0.23);          // saku
    mk(torso, 0.62, 0.22, 0.22, shirtMat, 0, 0.52, -0.2);          // tudung
    const strings = [-0.1, 0.1].map(x => mk(torso, 0.04, 0.3, 0.03, 0xf8fafc, x, 0.3, 0.24));
    const casualParts = strings;
    if (n % 3 === 0) casualParts.push(mk(torso, 0.92, 0.1, 0.47, 0xf8fafc, 0, 0.05, 0));
    // Kemeja + dasi (tampil saat mode formal)
    const collar = mk(torso, 0.34, 0.8, 0.04, 0xffffff, 0, 0, 0.235);
    const tie = mk(torso, 0.13, 0.55, 0.05, 0xdc2626, 0, -0.08, 0.26);
    collar.visible = false; tie.visible = false;

    // Kepala (pivot di leher agar bisa mengangguk)
    const headG = new THREE.Group();
    headG.position.set(0, 1.85, 0);
    group.add(headG);
    const hp = (w, h, d, c, x, y, z, ex) => mk(headG, w, h, d, c, x, y - 1.85, z, ex);

    hp(0.58, 0.58, 0.58, skinMat, 0, 2.22, 0);

    // Rambut
    const top = () => hp(0.64, 0.24, 0.64, hairMat, 0, 2.54, 0);
    const fringe = () => hp(0.64, 0.15, 0.2, hairMat, 0, 2.42, 0.22);
    switch (hairStyle) {
        case 'short': top(); fringe(); break;
        case 'spiky':
            top(); fringe();
            for (let i = 0; i < 5; i++) hp(0.12, 0.24, 0.12, hairMat, -0.24 + i * 0.12, 2.76, i % 2 ? 0.1 : -0.1);
            break;
        case 'long':
            top(); fringe();
            hp(0.66, 1.0, 0.16, hairMat, 0, 2.0, -0.3);
            hp(0.08, 0.7, 0.5, hairMat, -0.32, 2.1, -0.05); hp(0.08, 0.7, 0.5, hairMat, 0.32, 2.1, -0.05);
            break;
        case 'bun':
            top(); fringe();
            hp(0.3, 0.3, 0.3, hairMat, 0, 2.8, -0.1);
            hp(0.62, 0.3, 0.12, hairMat, 0, 2.4, -0.3);
            break;
        case 'ponytail':
            top(); fringe();
            hp(0.62, 0.4, 0.12, hairMat, 0, 2.4, -0.3);
            hp(0.18, 0.7, 0.18, hairMat, 0, 2.0, -0.42);
            hp(0.22, 0.08, 0.22, 0xf43f5e, 0, 2.38, -0.38);
            break;
        case 'bob':
            top(); fringe();
            hp(0.68, 0.55, 0.14, hairMat, 0, 2.25, -0.3);
            hp(0.08, 0.45, 0.5, hairMat, -0.33, 2.28, -0.02); hp(0.08, 0.45, 0.5, hairMat, 0.33, 2.28, -0.02);
            break;
        case 'curly': {
            const afro = sph(headG, 0.42, hairMat, 0, 2.68 - 1.85, -0.08);
            afro.scale.set(1.1, 0.75, 1.05);
            break;
        }
        case 'cap': {
            const capMat = M(hoodieColor);
            hp(0.66, 0.2, 0.66, capMat, 0, 2.57, 0);
            hp(0.52, 0.06, 0.34, capMat, 0, 2.49, 0.42);
            hp(0.62, 0.3, 0.1, hairMat, 0, 2.3, -0.3);
            break;
        }
    }

    // Wajah
    const faceMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    [-0.14, 0.14].forEach(x => {
        hp(0.13, 0.1, 0.03, 0xffffff, x, 2.25, 0.295, { emissive: 0x444444 });
        hp(0.06, 0.08, 0.03, faceMat, x, 2.25, 0.31);
        hp(0.14, 0.03, 0.03, hairMat, x, 2.36, 0.3);
        hp(0.1, 0.05, 0.02, 0xfca5a5, x * 1.5, 2.13, 0.295);
    });
    hp(0.22, 0.05, 0.04, faceMat, 0, 2.1, 0.3);
    if (glasses) {
        [-0.14, 0.14].forEach(x => hp(0.2, 0.16, 0.02, 0x93c5fd, x, 2.25, 0.335, { transparent: true, opacity: 0.4 }));
        hp(0.5, 0.03, 0.03, 0x111827, 0, 2.34, 0.34);
        hp(0.08, 0.03, 0.03, 0x111827, 0, 2.27, 0.34);
    }

    // Headset
    if (hairStyle !== 'cap') hp(0.66, 0.12, 0.12, M(0x1e293b, { metalness: 0.8 }), 0, 2.58, 0);
    [-0.35, 0.35].forEach(x => hp(0.12, 0.24, 0.24, M(accent, { emissive: hoodieColor, emissiveIntensity: 0.5 }), x, 2.25, 0));
    hp(0.04, 0.04, 0.3, 0x111827, 0.36, 2.1, 0.15);

    // Lengan (pivot di bahu)
    const armGeo = new THREE.BoxGeometry(0.32, 0.9, 0.32);
    armGeo.translate(0, -0.45, 0);
    const leftArm = new THREE.Mesh(armGeo, shirtMat);
    leftArm.position.set(-0.62, 1.85, 0); leftArm.castShadow = true;
    const rightArm = new THREE.Mesh(armGeo, shirtMat);
    rightArm.position.set(0.62, 1.85, 0); rightArm.castShadow = true;
    mk(leftArm, 0.34, 0.22, 0.34, skinMat, 0, -0.8, 0);
    mk(rightArm, 0.34, 0.22, 0.34, skinMat, 0, -0.8, 0);

    // Kaki (pivot di pinggul) + sepatu
    const legGeo = new THREE.BoxGeometry(0.38, 0.9, 0.38);
    legGeo.translate(0, -0.45, 0);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLeg.position.set(-0.22, 0.9, 0); leftLeg.castShadow = true;
    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLeg.position.set(0.22, 0.9, 0); rightLeg.castShadow = true;
    const shoeMat = M(shoeCol);
    mk(leftLeg, 0.42, 0.22, 0.5, shoeMat, 0, -0.8, 0.04);
    mk(rightLeg, 0.42, 0.22, 0.5, shoeMat, 0, -0.8, 0.04);
    mk(leftLeg, 0.43, 0.05, 0.51, 0xf8fafc, 0, -0.9, 0.04);
    mk(rightLeg, 0.43, 0.05, 0.51, 0xf8fafc, 0, -0.9, 0.04);

    group.add(leftArm, rightArm, leftLeg, rightLeg);

    // Aksesori
    if (extra === 'bag') {
        const bagCol = [0xf59e0b, 0x2563eb, 0xdc2626, 0x7c3aed][n % 4];
        mk(group, 0.6, 0.75, 0.22, bagCol, 0, 1.4, -0.34);
        mk(group, 0.62, 0.25, 0.24, 0x111827, 0, 1.2, -0.34);
        [-0.28, 0.28].forEach(x => mk(group, 0.08, 0.8, 0.03, 0x111827, x, 1.38, 0.24));
    } else if (extra === 'scarf') {
        const sc = [0xef4444, 0xfacc15, 0x22c55e][n % 3];
        mk(group, 0.98, 0.2, 0.52, sc, 0, 1.88, 0);
        mk(group, 0.2, 0.55, 0.05, sc, 0.25, 1.6, 0.27);
    }

    // Papan nama
    const lbl = makeLabel(isPlayer ? 'You' : (config.name.split('. ')[1] || config.name), {
        bg: isPlayer ? 'rgba(14,165,233,0.9)' : 'rgba(15,23,42,0.78)', sw: 2.4, sh: 0.6
    });
    lbl.position.set(0, 3.4, 0);
    group.add(lbl);

    group.scale.setScalar(sz);
    group.userData = {
        torso, shirtMat, leftArm, rightArm, leftLeg, rightLeg,
        head: headG, casualParts, formalParts: [collar, tie],
        casualColor: hoodieColor,
        phase: 0, moving: false, emote: null,
        data: config
    };
    return group;
}

// =========================================================
// 5. SPAWN PEMAIN UTAMA & 19 TEMAN KELAS
// =========================================================
const npcAvatars = [];
const rosterList = document.getElementById('roster-list');
rosterList.innerHTML = '';

studentsData.forEach(student => {
    const npc = createDetailedRobloxAvatar(student, false);
    npc.position.set(student.pos[0], 0.1, student.pos[2]);

    // Hitbox untuk interaksi klik (harus child terakhir)
    const hitbox = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 2.6, 1.3),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitbox.position.y = 1.3;
    hitbox.userData = student;
    npc.add(hitbox);

    scene.add(npc);
    npcAvatars.push(npc);

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="student-left">
            <span class="dot" style="background:#${student.casualColor.toString(16).padStart(6, '0')}"></span>
            <span>${student.name}</span>
        </div>
        <span class="tp-hint">Meet</span>
    `;
    li.onclick = () => {
        player.position.set(student.pos[0], 0.1, student.pos[2] + 2.2);
        openStudentModal(student);
    };
    rosterList.appendChild(li);
});

// Player Utama (Kamu)
let player = createDetailedRobloxAvatar({
    name: "You (Player)",
    role: "BISPRO Student",
    casualColor: 0x0ea5e9,
    skin: 0xf1c27d,
    hair: 0x271c19
}, true);
player.position.set(0, 0.1, 10);
scene.add(player);

// =========================================================
// 6. OUTFIT & EMOTE TOGGLE
// =========================================================
let isFormal = false;
document.getElementById('btn-outfit').onclick = () => {
    isFormal = !isFormal;
    const allChars = [player, ...npcAvatars];
    allChars.forEach(char => {
        const torsoMesh = char.userData.torso;
        const leftArmMesh = char.userData.leftArm;
        const rightArmMesh = char.userData.rightArm;

        if (isFormal) {
            torsoMesh.material.color.setHex(0x0f172a); // Jas Hitam Formal
            leftArmMesh.material.color.setHex(0x0f172a);
            rightArmMesh.material.color.setHex(0x0f172a);
        } else {
            const origColor = char.userData.casualColor;
            torsoMesh.material.color.setHex(origColor);
            leftArmMesh.material.color.setHex(origColor);
            rightArmMesh.material.color.setHex(origColor);
        }
        char.userData.casualParts.forEach(p => p.visible = !isFormal);
        char.userData.formalParts.forEach(p => p.visible = isFormal);
    });
    document.getElementById('btn-outfit').innerText = isFormal ? "👕 Switch to Casual" : "👔 Switch to Formal Suit";
    addSystemMessage(isFormal ? "Everyone switched to Formal Business Suit!" : "Everyone switched to Casual Hoodie Outfit!");
};

window.triggerEmote = function(type) {
    const labels = { wave: "waves!", present: "is pitching!", cheer: "celebrates!", nod: "agrees!" };
    player.userData.emote = { type: type, t: 0 };
    addSystemMessage(`You ${labels[type]}`);
};

// =========================================================
// 7. KONTROL GERAK & KAMERA
// =========================================================
let camYaw = 0;
let camPitch = 0.4;
let isDragging = false;

let camDist = 7;
const _ptrs = new Map();
let _pinch = 0;
const _cv = renderer.domElement;
_cv.style.touchAction = 'none';
_cv.addEventListener('contextmenu', e => e.preventDefault());
_cv.addEventListener('pointerdown', e => {
    _cv.setPointerCapture(e.pointerId);
    _ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (_ptrs.size === 2) { const [a, b] = [..._ptrs.values()]; _pinch = Math.hypot(a.x - b.x, a.y - b.y); }
});
_cv.addEventListener('pointermove', e => {
    const p = _ptrs.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (_ptrs.size === 1) {
        camYaw -= dx * 0.006;
        camPitch = Math.max(0.05, Math.min(1.3, camPitch + dy * 0.006));
    } else if (_ptrs.size === 2) {
        const [a, b] = [..._ptrs.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        camDist = Math.max(3.5, Math.min(16, camDist - (d - _pinch) * 0.03));
        _pinch = d;
    }
});
['pointerup', 'pointercancel'].forEach(ev => _cv.addEventListener(ev, e => _ptrs.delete(e.pointerId)));
_cv.addEventListener('wheel', e => {
    e.preventDefault();
    camDist = Math.max(3.5, Math.min(16, camDist + e.deltaY * 0.01));
}, { passive: false });

const keys = {};
window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;
    keys[e.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });

let nearbyTarget = null;
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'e' && nearbyTarget) {
        openStudentModal(nearbyTarget);
    }
});

function updatePlayer(dt) {
    let moveX = 0;
    let moveZ = 0;

    if (keys['w'] || keys['arrowup']) moveZ -= 1;
    if (keys['s'] || keys['arrowdown']) moveZ += 1;
    if (keys['a'] || keys['arrowleft']) moveX -= 1;
    if (keys['d'] || keys['arrowright']) moveX += 1;

    player.userData.moving = (moveX !== 0 || moveZ !== 0);

    if (moveX !== 0 || moveZ !== 0) {
        const angle = Math.atan2(moveX, moveZ) + camYaw;
        const speed = 7.5 * dt;
        player.position.x += Math.sin(angle) * speed;
        player.position.z += Math.cos(angle) * speed;
        player.rotation.y = angle;
    }
    resolveWalls(player.position);

    // Kamera Third-Person
    const dist = camDist;
    const tx = player.position.x + Math.sin(camYaw) * Math.cos(camPitch) * dist;
    const ty = player.position.y + 1.8 + Math.sin(camPitch) * dist;
    const tz = player.position.z + Math.cos(camYaw) * Math.cos(camPitch) * dist;
    camera.position.lerp(new THREE.Vector3(tx, ty, tz), 0.15);
    camera.lookAt(player.position.x, player.position.y + 1.5, player.position.z);

    // Deteksi Jarak Terdekat
    let found = null;
    npcAvatars.forEach(npc => {
        if (player.position.distanceTo(npc.position) < 2.5) {
            found = npc.children.find(c => c.userData && c.userData.skills).userData; // hitbox data
            npc.lookAt(player.position.x, player.position.y, player.position.z);
        }
    });

    nearbyTarget = found;
    const promptEl = document.getElementById('interact-prompt');
    if (nearbyTarget) {
        document.getElementById('prompt-text').innerText = `Chat with ${nearbyTarget.name}`;
        promptEl.classList.remove('hidden');
    } else {
        promptEl.classList.add('hidden');
    }
}

// =========================================================
// 8. CHAT & MODAL PROFIL
// =========================================================
function addSystemMessage(text) {
    const box = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'sys-msg';
    div.innerText = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

document.getElementById('chat-form').onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;
    
    const box = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.innerHTML = `<b>You:</b> ${msg}`;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    input.value = "";
    input.blur();

    if (nearbyTarget) {
        setTimeout(() => {
            const div2 = document.createElement('div');
            div2.innerHTML = `<b>${nearbyTarget.name}:</b> Let's practice ${nearbyTarget.skills[0]} at ${nearbyTarget.zone}!`;
            box.appendChild(div2);
            box.scrollTop = box.scrollHeight;
        }, 600);
    }
};

function openStudentModal(student) {
    document.getElementById('modal-title').innerText = student.name;
    document.getElementById('modal-subtitle').innerText = `${student.role} • ${student.zone}`;
    document.getElementById('modal-desc').innerText = student.bio;
    document.getElementById('modal-quote').innerText = `"${student.quote}"`;

    const badge = document.getElementById('modal-avatar');
    badge.innerText = student.name.split('. ')[1].charAt(0);
    badge.style.backgroundColor = '#' + student.casualColor.toString(16).padStart(6, '0');

    const tagsDiv = document.getElementById('modal-tags');
    tagsDiv.innerHTML = '';
    student.skills.forEach(s => {
        const span = document.createElement('span');
        span.className = 'tag-chip';
        span.innerText = s;
        tagsDiv.appendChild(span);
    });

    document.getElementById('modal-action-btn').onclick = () => {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(`Hello! I am ${student.name.split('. ')[1]}, ${student.role}. ${student.quote}`);
        utter.lang = 'en-US';
        window.speechSynthesis.speak(utter);
    };

    document.getElementById('info-modal').classList.remove('hidden');
}

window.closeModal = function() {
    window.speechSynthesis.cancel();
    document.getElementById('info-modal').classList.add('hidden');
};

// =========================================================
// 9. ANIMASI AVATAR & RENDER LOOP
// =========================================================
// Tabrakan dinding, lompat (Space), Esc, dan dinding transparan saat di dalam gedung
function resolveWalls(pos) {
    const r = 0.45;
    wallBoxes.forEach(b => {
        const cx = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        const dx = pos.x - cx, dz = pos.z - cz, d2 = dx * dx + dz * dz;
        if (d2 >= r * r) return;
        if (d2 > 1e-8) { const d = Math.sqrt(d2); pos.x = cx + dx / d * r; pos.z = cz + dz / d * r; }
        else {
            const l = pos.x - b.minX, rg = b.maxX - pos.x, t = pos.z - b.minZ, bo = b.maxZ - pos.z;
            const m = Math.min(l, rg, t, bo);
            if (m === l) pos.x = b.minX - r; else if (m === rg) pos.x = b.maxX + r;
            else if (m === t) pos.z = b.minZ - r; else pos.z = b.maxZ + r;
        }
    });
}
function jumpStep(dt) {
    const u = player.userData;
    if (u.jumpY === undefined) { u.jumpY = 0; u.vy = 0; }
    if (keys[' '] && u.jumpY <= 0.001) u.vy = 7.5;
    u.vy -= 22 * dt;
    u.jumpY = Math.max(0, u.jumpY + u.vy * dt);
    if (u.jumpY === 0 && u.vy < 0) u.vy = 0;
}
function updateCutaway() {
    const p = player.position;
    campusZones.forEach(z => {
        const s = zoneShells[z.id];
        if (!s) return;
        const inside = Math.abs(p.x - z.pos[0]) < 5.2 && Math.abs(p.z - z.pos[2]) < 5.2;
        s.roof.visible = !inside;
        s.mats.forEach(m => { m.opacity += ((inside ? 0.18 : 1) - m.opacity) * 0.2; });
    });
}
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const clock = new THREE.Clock();

function ease(obj, prop, target, k) { obj[prop] += (target - obj[prop]) * k; }

function driveChar(ch, dt) {
    const u = ch.userData;
    const k = Math.min(1, dt * 14);
    let swing = 0;
    if (u.moving) { u.phase += dt * 11; swing = Math.sin(u.phase) * 0.75; }

    let laX = -swing, raX = swing, laZ = 0, raZ = 0, headX = 0, hop = 0;
    if (u.emote) {
        const e = u.emote;
        e.t += dt;
        if (e.t > 2.2) { u.emote = null; }
        else if (e.type === 'wave') { raZ = 2.4 + Math.sin(e.t * 12) * 0.35; raX = 0; }
        else if (e.type === 'present') { raX = -1.4 + Math.sin(e.t * 6) * 0.15; laX = -0.8; raZ = 0.2; laZ = -0.2; }
        else if (e.type === 'cheer') { raZ = 2.8; laZ = -2.8; raX = 0; laX = 0; hop = Math.abs(Math.sin(e.t * 8)) * 0.35; }
        else if (e.type === 'nod') { headX = Math.sin(e.t * 9) * 0.4; }
    }
    ease(u.leftLeg.rotation, 'x', swing, k);
    ease(u.rightLeg.rotation, 'x', -swing, k);
    ease(u.leftArm.rotation, 'x', laX, k); ease(u.rightArm.rotation, 'x', raX, k);
    ease(u.leftArm.rotation, 'z', laZ, k); ease(u.rightArm.rotation, 'z', raZ, k);
    ease(u.head.rotation, 'x', headX, k);
    ch.position.y = 0.1 + hop + (u.jumpY || 0);
}

function animateAvatars(t, dt) {
    driveChar(player, dt);
    (window.remotePlayers || []).forEach(r => driveChar(r, dt));

    // NPC: gerakan idle ringan
    npcAvatars.forEach((npc, i) => {
        const d = npc.userData;
        d.leftArm.rotation.x = Math.sin(t * 1.6 + i) * 0.06;
        d.rightArm.rotation.x = -Math.sin(t * 1.6 + i) * 0.06;
        d.head.rotation.y = Math.sin(t * 0.7 + i * 1.7) * 0.3;
    });
}

function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.1);
    const t = clock.elapsedTime;
    updatePlayer(dt);
    jumpStep(dt);
    (window.frameHooks || []).forEach(f => f(dt, t));
    updateCutaway();
    animateAvatars(t, dt);

    npcAvatars.forEach(npc => {
        npc.rotation.y += 0.003;
    });

    clouds.forEach(c => {
        c.position.x += c.userData.speed * dt;
        if (c.position.x > 95) c.position.x = -95;
    });
    if (zoneAnimated.jet) zoneAnimated.jet.scale.y = 1 + Math.sin(t * 3) * 0.2;

    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});