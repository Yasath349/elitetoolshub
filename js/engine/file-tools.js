window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// IMAGE TOOLS (REAL LOGIC)
// ==========================================

window.EliteToolEngines['img-compress'] = {
    init: function() {
        const btn = document.getElementById('icBtn');
        if(!btn) return;
        btn.onclick = () => {
            const file = document.getElementById('icFile').files[0];
            const quality = parseFloat(document.getElementById('icQuality').value);
            if(!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const out = canvas.toDataURL('image/jpeg', quality);
                    const a = document.createElement('a');
                    a.href = out; a.download = 'compressed.jpg'; a.click();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
    }
};

window.EliteToolEngines['img-resize'] = {
    init: function() {
        const btn = document.getElementById('irBtn');
        if(!btn) return;
        btn.onclick = () => {
            const file = document.getElementById('irFile').files[0];
            const w = parseInt(document.getElementById('irW').value);
            const h = parseInt(document.getElementById('irH').value);
            if(!file || !w || !h) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = w; canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);
                    const out = canvas.toDataURL('image/png');
                    const a = document.createElement('a');
                    a.href = out; a.download = 'resized.png'; a.click();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
    }
};

// ==========================================
// DEVELOPER TOOLS
// ==========================================

window.EliteToolEngines['json-formatter'] = {
    init: function() {
        const btn = document.getElementById('jfBtn');
        if(!btn) return;
        btn.onclick = () => {
            const input = document.getElementById('jfInput').value;
            const res = document.getElementById('jfResult');
            try {
                const parsed = JSON.parse(input);
                res.value = JSON.stringify(parsed, null, 4);
            } catch(e) { res.value = "Invalid JSON: " + e.message; }
        };
    }
};

window.EliteToolEngines['live-editor'] = {
    init: function() {
        const html = document.getElementById('leHtml');
        const preview = document.getElementById('lePreview');
        if(!html || !preview) return;
        const update = () => {
            const doc = preview.contentDocument || preview.contentWindow.document;
            doc.open();
            doc.write(html.value);
            doc.close();
        };
        html.oninput = update;
        update();
    }
};
