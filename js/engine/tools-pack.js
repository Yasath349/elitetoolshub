window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// 1. CALCULATION TOOLS
// ==========================================
window.EliteToolEngines['basic-calc'] = {
    init: function() {
        const display = document.getElementById('calcDisplay');
        const buttons = document.querySelectorAll('.calc-btn');
        if(!display) return;
        buttons.forEach(btn => {
            btn.onclick = () => {
                const val = btn.getAttribute('data-val');
                if(val === '=') {
                    try { display.value = eval(display.value); } catch(e) { display.value = 'Error'; }
                } else if(val === 'C') {
                    display.value = '';
                } else {
                    display.value += val;
                }
            };
        });
    }
};

window.EliteToolEngines['percentage-calc'] = {
    init: function() {
        const btn = document.getElementById('pcBtn');
        if(!btn) return;
        btn.onclick = () => {
            const p = parseFloat(document.getElementById('pcPercent').value);
            const v = parseFloat(document.getElementById('pcValue').value);
            const res = document.getElementById('pcResult');
            if(!isNaN(p) && !isNaN(v)) {
                res.textContent = (p/100)*v;
            }
        };
    }
};

window.EliteToolEngines['emi-calc'] = {
    init: function() {
        const btn = document.getElementById('emiBtn');
        if(!btn) return;
        btn.onclick = () => {
            const p = parseFloat(document.getElementById('emiAmount').value);
            const r = parseFloat(document.getElementById('emiRate').value) / 12 / 100;
            const n = parseFloat(document.getElementById('emiTenure').value) * 12;
            const res = document.getElementById('emiResult');
            if(p && r && n) {
                const emi = (p * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
                res.textContent = `$${emi.toFixed(2)}`;
                if(document.getElementById('emiTotalAmount')) {
                    const total = emi * n;
                    document.getElementById('emiTotalAmount').textContent = `$${total.toFixed(2)}`;
                    document.getElementById('emiTotalInterest').textContent = `$${(total - p).toFixed(2)}`;
                }
            }
        };
    }
};

// ==========================================
// 2. TEXT PROCESSING
// ==========================================
window.EliteToolEngines['word-counter'] = {
    init: function() {
        const area = document.getElementById('wcText');
        if(!area) return;
        area.oninput = () => {
            const text = area.value.trim();
            document.getElementById('wcWords').textContent = text ? text.split(/\s+/).length : 0;
            document.getElementById('wcChars').textContent = text.length;
        };
    }
};

window.EliteToolEngines['case-converter'] = {
    init: function() {
        const area = document.getElementById('caseText');
        if(!area) return;
        if(document.getElementById('cUpper')) document.getElementById('cUpper').onclick = () => area.value = area.value.toUpperCase();
        if(document.getElementById('cLower')) document.getElementById('cLower').onclick = () => area.value = area.value.toLowerCase();
        if(document.getElementById('cTitle')) document.getElementById('cTitle').onclick = () => {
            area.value = area.value.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        };
    }
};

window.EliteToolEngines['tts'] = {
    init: function() {
        const btn = document.getElementById('ttsPlay');
        if(!btn) return;
        btn.onclick = () => {
            const text = document.getElementById('ttsText').value;
            if(!text) return;
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        };
    }
};

// ==========================================
// 3. SECURITY & WEB
// ==========================================
window.EliteToolEngines['password-gen'] = {
    init: function() {
        const btn = document.getElementById('pgBtn');
        if(!btn) return;
        btn.onclick = () => {
            const len = parseInt(document.getElementById('pgLength').value) || 16;
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
            let retVal = "";
            for (let i = 0; i < len; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            if(document.getElementById('pgResult')) document.getElementById('pgResult').innerText = retVal;
        };
    }
};

window.EliteToolEngines['ip-checker'] = {
    init: function() {
        const btn = document.getElementById('ipBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const resBox = document.getElementById('ipResult');
            resBox.innerHTML = '<div class="loader-ai"></div>';
            try {
                const res = await fetch('https://api.ipify.org?format=json');
                const data = await res.json();
                resBox.innerText = data.ip;
            } catch(e) { 
                resBox.innerText = "Error fetching IP.";
            }
        };
    }
};

// ==========================================
// 4. DAILY LIFE
// ==========================================
window.EliteToolEngines['qr-gen'] = {
    init: function() {
        const btn = document.getElementById('qrBtn');
        if(!btn) return;
        btn.onclick = () => {
            const text = document.getElementById('qrText').value;
            const container = document.getElementById('qrCode');
            if(!container) return;
            container.innerHTML = "";
            new QRCode(container, {
                text: text,
                width: 140,
                height: 140
            });
        };
    }
};

window.EliteToolEngines['age-calc'] = {
    init: function() {
        const btn = document.getElementById('ageBtn');
        if(!btn) return;
        btn.onclick = () => {
            const dob = new Date(document.getElementById('ageDob').value);
            const now = new Date();
            const diff = now - dob;
            const age = new Date(diff).getUTCFullYear() - 1970;
            const res = document.getElementById('ageResult');
            if(res) res.textContent = `${age} Years Old`;
        };
    }
};
