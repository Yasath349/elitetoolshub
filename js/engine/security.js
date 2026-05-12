window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Password Generator
// ==========================================
window.EliteToolEngines['password-gen'] = {
    init: function() {
        const btn = document.getElementById('pgBtn');
        if(!btn) return;
        const lengthInput = document.getElementById('pgLength');
        const lenVal = document.getElementById('pgLenVal');
        const res = document.getElementById('pgResult');
        
        lengthInput.oninput = (e) => lenVal.textContent = e.target.value;

        btn.onclick = () => {
            const len = parseInt(lengthInput.value);
            const chars = [];
            if(document.getElementById('pgUpper').checked) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            if(document.getElementById('pgLower').checked) chars.push(..."abcdefghijklmnopqrstuvwxyz");
            if(document.getElementById('pgNum').checked) chars.push(..."0123456789");
            if(document.getElementById('pgSym').checked) chars.push(..."!@#$%^&*()_+");
            
            if(chars.length === 0) { res.textContent = "Select options"; return; }
            
            let pwd = "";
            const array = new Uint32Array(len);
            window.crypto.getRandomValues(array);
            for(let i=0; i<len; i++) pwd += chars[array[i] % chars.length];
            res.textContent = pwd;
        };
    }
};

// ==========================================
// Password Strength Checker
// ==========================================
window.EliteToolEngines['password-check'] = {
    init: function() {
        const input = document.getElementById('pwcInput');
        if(!input) return;
        input.oninput = () => {
            const val = input.value;
            let strength = 0;
            if(val.length > 7) strength++;
            if(/[A-Z]/.test(val)) strength++;
            if(/[0-9]/.test(val)) strength++;
            if(/[^A-Za-z0-9]/.test(val)) strength++;
            
            const bar = document.getElementById('pwcBar');
            const res = document.getElementById('pwcResult');
            const pct = (strength/4)*100;
            bar.style.width = pct + '%';
            
            if(pct<=25) { bar.style.background = 'var(--danger)'; res.innerText = 'Weak'; }
            else if(pct<=50) { bar.style.background = 'var(--warning)'; res.innerText = 'Fair'; }
            else if(pct<=75) { bar.style.background = '#3b82f6'; res.innerText = 'Good'; }
            else { bar.style.background = 'var(--success)'; res.innerText = 'Strong'; }
        };
    }
};

// ==========================================
// IP Checker
// ==========================================
window.EliteToolEngines['ip-checker'] = {
    init: function() {
        const btn = document.getElementById('ipBtn');
        if(!btn) return;
        btn.onclick = async () => {
            document.getElementById('ipResult').innerText = "Fetching...";
            try {
                const res = await fetch('https://api.ipify.org?format=json');
                const data = await res.json();
                document.getElementById('ipResult').innerText = data.ip;
            } catch(e) {
                document.getElementById('ipResult').innerText = "Error fetching IP";
            }
        };
    }
};

// ==========================================
// Base64
// ==========================================
window.EliteToolEngines['base64'] = {
    init: function() {
        const encBtn = document.getElementById('b64Enc');
        const decBtn = document.getElementById('b64Dec');
        if(!encBtn) return;
        encBtn.onclick = () => {
            const val = document.getElementById('b64Input').value;
            try { document.getElementById('b64Output').value = btoa(val); } catch(e) { document.getElementById('b64Output').value="Invalid characters"; }
        };
        decBtn.onclick = () => {
            const val = document.getElementById('b64Input').value;
            try { document.getElementById('b64Output').value = atob(val); } catch(e) { document.getElementById('b64Output').value="Invalid Base64"; }
        };
    }
};

// ==========================================
// Hash Generator
// ==========================================
window.EliteToolEngines['hash-gen'] = {
    init: function() {
        const btn = document.getElementById('hgBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const msg = document.getElementById('hgInput').value;
            const msgBuffer = new TextEncoder().encode(msg);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            document.getElementById('hgResult').innerText = hashHex;
        };
    }
};
