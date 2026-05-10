window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// JSON Formatter
// ==========================================
window.EliteToolEngines['json-formatter'] = {
    init: function() {
        const btn = document.getElementById('jfBtn');
        if(!btn) return;
        btn.onclick = () => {
            const input = document.getElementById('jfInput').value;
            try {
                const parsed = JSON.parse(input);
                document.getElementById('jfOutput').value = JSON.stringify(parsed, null, 4);
                document.getElementById('jfOutput').style.borderColor = 'var(--border-color)';
            } catch(e) {
                document.getElementById('jfOutput').value = "Invalid JSON: \n" + e.message;
                document.getElementById('jfOutput').style.borderColor = 'var(--danger)';
            }
        };
    }
};

// ==========================================
// Live Web Editor
// ==========================================
window.EliteToolEngines['live-editor'] = {
    init: function() {
        const btn = document.getElementById('leBtn');
        if(!btn) return;
        const updateFrame = () => {
            const html = document.getElementById('leHtml').value;
            const css = document.getElementById('leCss').value;
            const frame = document.getElementById('leFrame');
            const content = `
                <!DOCTYPE html>
                <html><head><style>${css}</style></head><body>${html}</body></html>
            `;
            frame.srcdoc = content;
        };
        btn.onclick = updateFrame;
        updateFrame();
    }
};

// ==========================================
// Color Picker
// ==========================================
window.EliteToolEngines['color-picker'] = {
    init: function() {
        const input = document.getElementById('cpInput');
        if(!input) return;
        input.oninput = (e) => {
            const hex = e.target.value;
            document.getElementById('cpHex').innerText = hex.toUpperCase();
            const r = parseInt(hex.slice(1,3), 16);
            const g = parseInt(hex.slice(3,5), 16);
            const b = parseInt(hex.slice(5,7), 16);
            document.getElementById('cpRgb').innerText = `rgb(${r}, ${g}, ${b})`;
        };
    }
};

// ==========================================
// Code Minifier (Basic)
// ==========================================
window.EliteToolEngines['code-minify'] = {
    init: function() {
        const btn = document.getElementById('cmBtn');
        if(!btn) return;
        btn.onclick = () => {
            let code = document.getElementById('cmInput').value;
            // Extremely basic minification (removes newlines and extra spaces)
            code = code.replace(/\n/g, '').replace(/\s{2,}/g, ' ');
            document.getElementById('cmOutput').value = code;
        };
    }
};
