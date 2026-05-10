window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Design & Creative
// ==========================================
window.EliteToolEngines['font-pair'] = {
    init: function() {
        const btn = document.getElementById('fpBtn');
        if(!btn) return;
        const pairs = [
            { h: 'Playfair Display', b: 'Source Sans Pro' },
            { h: 'Merriweather', b: 'Open Sans' },
            { h: 'Montserrat', b: 'Roboto' },
            { h: 'Oswald', b: 'Lato' },
            { h: 'Abril Fatface', b: 'Poppins' }
        ];
        
        // Dynamically load Google Fonts for the demo
        const loadFont = (family) => {
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@400;700&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        };
        
        btn.onclick = () => {
            const p = pairs[Math.floor(Math.random() * pairs.length)];
            loadFont(p.h); loadFont(p.b);
            
            setTimeout(() => {
                const heading = document.getElementById('fpHeading');
                const body = document.getElementById('fpBody');
                heading.style.fontFamily = `"${p.h}", serif`;
                body.style.fontFamily = `"${p.b}", sans-serif`;
                document.getElementById('fpNames').innerText = `Heading: ${p.h} | Body: ${p.b}`;
            }, 500); // Wait for font load
        };
    }
};

window.EliteToolEngines['gradient-gen'] = {
    init: function() {
        const c1 = document.getElementById('ggC1');
        const c2 = document.getElementById('ggC2');
        const prev = document.getElementById('ggPreview');
        const res = document.getElementById('ggResult');
        if(!c1) return;
        
        const update = () => {
            const grad = `linear-gradient(to right, ${c1.value}, ${c2.value})`;
            prev.style.background = grad;
            res.value = `background: ${grad};`;
        };
        c1.oninput = update;
        c2.oninput = update;
    }
};

window.EliteToolEngines['color-extract'] = {
    init: function() {
        const file = document.getElementById('ceFile');
        if(!file) return;
        file.onchange = (e) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.getElementById('ceCanvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width; canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    // Simple hack: take colors from 5 distinct points
                    const points = [
                        [img.width/4, img.height/4],
                        [img.width/2, img.height/2],
                        [img.width*0.75, img.height*0.75],
                        [img.width/4, img.height*0.75],
                        [img.width*0.75, img.height/4]
                    ];
                    const res = document.getElementById('ceResult');
                    res.innerHTML = '';
                    points.forEach(p => {
                        const data = ctx.getImageData(p[0], p[1], 1, 1).data;
                        const hex = "#" + ((1 << 24) + (data[0] << 16) + (data[1] << 8) + data[2]).toString(16).slice(1);
                        res.innerHTML += `<div style="flex:1; background:${hex}; border-radius:var(--radius-md); display:flex; align-items:center; justify-content:center; font-size:0.8rem; color:#fff; text-shadow:0 0 2px #000;">${hex}</div>`;
                    });
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    }
};

window.EliteToolEngines['logo-gen'] = {
    init: function() {
        const btn = document.getElementById('lgBtn');
        if(!btn) return;
        btn.onclick = () => {
            const text = document.getElementById('lgText').value.toUpperCase() || 'E';
            const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#ef4444', '#f59e0b'];
            const c1 = colors[Math.floor(Math.random()*colors.length)];
            const c2 = colors[Math.floor(Math.random()*colors.length)];
            
            const svg = `
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
                            <stop offset="100%" style="stop-color:${c2};stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#grad1)" />
                    <text x="100" y="130" font-family="Outfit, sans-serif" font-size="100" font-weight="bold" fill="white" text-anchor="middle">${text}</text>
                </svg>
            `;
            document.getElementById('lgResult').innerHTML = svg;
        };
    }
};

window.EliteToolEngines['thumbnail-creator'] = {
    init: function() {
        const btn = document.getElementById('tcBtn');
        if(!btn) return;
        btn.onclick = () => {
            const title = document.getElementById('tcTitle').value || "EPIC VIDEO";
            const res = document.getElementById('tcResult');
            res.innerHTML = `
                <div style="position:absolute; inset:0; background:linear-gradient(45deg, #000, #333);"></div>
                <div style="position:absolute; right:-50px; bottom:-50px; font-size:200px; opacity:0.2;">😲</div>
                <div style="position:absolute; bottom:10%; left:5%; padding:20px; background:red; color:white; font-family:'Outfit', sans-serif; font-size:3vw; font-weight:900; text-transform:uppercase; transform:skewY(-2deg); box-shadow:5px 5px 0 #000;">
                    ${title}
                </div>
                <div style="position:absolute; top:5%; right:5%; background:yellow; color:black; font-weight:bold; padding:5px 15px; border-radius:20px; font-family:sans-serif;">MUST WATCH</div>
            `;
        };
    }
};
