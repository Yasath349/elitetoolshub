window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Basic Calculator
// ==========================================
window.EliteToolEngines['basic-calc'] = {
    init: function() {
        const display = document.getElementById('bcDisplay');
        const history = document.getElementById('bcHistory');
        if(!display) return;
        
        let current = '0';
        let prev = '';
        let op = null;

        const update = () => { display.innerText = current; };

        document.querySelectorAll('.bc-num').forEach(btn => {
            btn.onclick = () => {
                if(current === '0' && btn.innerText !== '.') current = btn.innerText;
                else current += btn.innerText;
                update();
            }
        });

        document.querySelectorAll('.bc-op').forEach(btn => {
            btn.onclick = () => {
                if(op !== null) return;
                prev = current;
                op = btn.getAttribute('data-op');
                history.innerText = `${prev} ${op}`;
                current = '0';
                update();
            }
        });

        document.getElementById('bcDel').onclick = () => {
            current = current.length > 1 ? current.slice(0, -1) : '0';
            update();
        };

        document.getElementById('bcEq').onclick = () => {
            if(!op || !prev) return;
            const a = parseFloat(prev);
            const b = parseFloat(current);
            let res = 0;
            if(op==='+') res = a+b;
            if(op==='-') res = a-b;
            if(op==='*') res = a*b;
            if(op==='/') res = a/b;
            history.innerText = `${prev} ${op} ${current} =`;
            current = res.toString();
            op = null;
            prev = '';
            update();
        };
    }
};

// ==========================================
// Percentage Calculator
// ==========================================
window.EliteToolEngines['percentage-calc'] = {
    init: function() {
        const btn1 = document.getElementById('pcBtn1');
        const btn2 = document.getElementById('pcBtn2');
        const res = document.getElementById('pcResult');
        if(!btn1) return;

        btn1.onclick = () => {
            const p = parseFloat(document.getElementById('pcP1').value);
            const v = parseFloat(document.getElementById('pcV1').value);
            if(!isNaN(p) && !isNaN(v)) res.innerText = (p/100 * v).toFixed(2);
        };
        btn2.onclick = () => {
            const v2 = parseFloat(document.getElementById('pcV2').value);
            const v3 = parseFloat(document.getElementById('pcV3').value);
            if(!isNaN(v2) && !isNaN(v3) && v3!==0) res.innerText = ((v2/v3)*100).toFixed(2) + '%';
        };
    }
};

// ==========================================
// EMI Calculator
// ==========================================
window.EliteToolEngines['emi-calc'] = {
    init: function() {
        const btn = document.getElementById('emiBtn');
        if(!btn) return;

        btn.onclick = () => {
            const p = parseFloat(document.getElementById('emiAmount').value);
            const r = parseFloat(document.getElementById('emiRate').value) / 12 / 100;
            const n = parseFloat(document.getElementById('emiTenure').value) * 12;

            if(p>0 && r>=0 && n>0) {
                let emi = r===0 ? p/n : p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                document.getElementById('emiResult').innerText = '$' + emi.toFixed(2);
                document.getElementById('emiTotalAmount').innerText = '$' + (emi*n).toFixed(2);
                document.getElementById('emiTotalInterest').innerText = '$' + (emi*n - p).toFixed(2);
            }
        };
    }
};

// ==========================================
// BMI Calculator
// ==========================================
window.EliteToolEngines['bmi-calc'] = {
    init: function() {
        const btn = document.getElementById('bmiBtn');
        if(!btn) return;
        btn.onclick = () => {
            const w = parseFloat(document.getElementById('bmiW').value);
            const h = parseFloat(document.getElementById('bmiH').value) / 100; // to meters
            if(w>0 && h>0) {
                const bmi = w / (h*h);
                document.getElementById('bmiResult').innerText = bmi.toFixed(1);
                let status = "Normal";
                let color = "var(--success)";
                if(bmi<18.5) { status="Underweight"; color="var(--warning)"; }
                else if(bmi>=25 && bmi<30) { status="Overweight"; color="var(--warning)"; }
                else if(bmi>=30) { status="Obese"; color="var(--danger)"; }
                const st = document.getElementById('bmiStatus');
                st.innerText = status;
                st.style.color = color;
            }
        };
    }
};

// ==========================================
// Discount Calculator
// ==========================================
window.EliteToolEngines['discount-calc'] = {
    init: function() {
        const btn = document.getElementById('dcBtn');
        if(!btn) return;
        btn.onclick = () => {
            const p = parseFloat(document.getElementById('dcPrice').value);
            const d = parseFloat(document.getElementById('dcDisc').value);
            if(p>=0 && d>=0) {
                const save = p * (d/100);
                document.getElementById('dcFinal').innerText = '$' + (p - save).toFixed(2);
                document.getElementById('dcSave').innerText = '$' + save.toFixed(2);
            }
        };
    }
};

// ==========================================
// Currency Converter
// ==========================================
window.EliteToolEngines['currency-conv'] = {
    init: function() {
        const btn = document.getElementById('ccBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const amt = parseFloat(document.getElementById('ccAmount').value);
            const from = document.getElementById('ccFrom').value;
            const to = document.getElementById('ccTo').value;
            if(amt>0) {
                try {
                    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
                    const data = await res.json();
                    const rate = data.rates[to];
                    document.getElementById('ccResult').innerText = (amt * rate).toFixed(2) + ` ${to}`;
                } catch(e) {
                    // Fallback mock
                    const mockRates = {USD:1, EUR:0.92, GBP:0.79, INR:83.2};
                    const rate = mockRates[to] / mockRates[from];
                    document.getElementById('ccResult').innerText = (amt * rate).toFixed(2) + ` ${to}`;
                }
            }
        };
    }
};
