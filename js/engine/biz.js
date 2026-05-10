window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Business Tools
// ==========================================
window.EliteToolEngines['invoice-gen'] = {
    init: function() {
        const btn = document.getElementById('igBtn');
        if(!btn) return;
        btn.onclick = () => {
            const client = document.getElementById('igClient').value;
            const amt = document.getElementById('igAmount').value;
            const desc = document.getElementById('igDesc').value;
            const res = document.getElementById('igResult');
            res.style.display = 'block';
            res.innerHTML = `
                <h2>INVOICE</h2>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>Billed To:</strong> ${client}</p>
                <hr style="margin:20px 0;">
                <p><strong>Description:</strong> ${desc}</p>
                <h3 style="text-align:right; margin-top:20px;">Total: $${parseFloat(amt||0).toFixed(2)}</h3>
                <p style="text-align:right; font-size:0.8rem; color:gray;">*Use browser print to export PDF</p>
            `;
        };
    }
};

window.EliteToolEngines['salary-calc'] = {
    init: function() {
        const btn = document.getElementById('scBtn');
        if(!btn) return;
        btn.onclick = () => {
            const salary = parseFloat(document.getElementById('scSalary').value);
            const tax = parseFloat(document.getElementById('scTax').value);
            if(salary>0) {
                const net = salary - (salary * (tax/100));
                document.getElementById('scResult').innerHTML = `
                    <p><strong>Gross Monthly:</strong> $${(salary/12).toFixed(2)}</p>
                    <p><strong>Net Monthly:</strong> $${(net/12).toFixed(2)}</p>
                    <p><strong>Net Annual:</strong> $${net.toFixed(2)}</p>
                `;
            }
        };
    }
};

window.EliteToolEngines['tax-est'] = {
    init: function() {
        const btn = document.getElementById('teBtn');
        if(!btn) return;
        btn.onclick = () => {
            const inc = parseFloat(document.getElementById('teIncome').value);
            let tax = 0;
            if(inc <= 10000) tax = inc * 0.1;
            else if(inc <= 40000) tax = 1000 + (inc-10000)*0.12;
            else if(inc <= 85000) tax = 4600 + (inc-40000)*0.22;
            else tax = 14500 + (inc-85000)*0.24;
            document.getElementById('teResult').innerText = '$' + tax.toFixed(2);
        };
    }
};

window.EliteToolEngines['markup-calc'] = {
    init: function() {
        const btn = document.getElementById('mcBtn');
        if(!btn) return;
        btn.onclick = () => {
            const cost = parseFloat(document.getElementById('mcCost').value);
            const markup = parseFloat(document.getElementById('mcMarkup').value);
            if(cost>0) {
                const price = cost + (cost * (markup/100));
                document.getElementById('mcResult').innerText = '$' + price.toFixed(2);
                document.getElementById('mcProfit').innerText = `Profit Margin: ${((price-cost)/price * 100).toFixed(2)}%`;
            }
        };
    }
};

window.EliteToolEngines['breakeven-calc'] = {
    init: function() {
        const btn = document.getElementById('beBtn');
        if(!btn) return;
        btn.onclick = () => {
            const fixed = parseFloat(document.getElementById('beFixed').value);
            const varCost = parseFloat(document.getElementById('beVar').value);
            const price = parseFloat(document.getElementById('bePrice').value);
            if(price > varCost) {
                const units = fixed / (price - varCost);
                document.getElementById('beResult').innerText = Math.ceil(units);
            } else {
                document.getElementById('beResult').innerText = "Price must be > Variable Cost";
            }
        };
    }
};
