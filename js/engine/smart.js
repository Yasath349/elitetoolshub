window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Smart Utilities
// ==========================================
window.EliteToolEngines['screen-res'] = {
    init: function() {
        const btn = document.getElementById('srBtn');
        if(!btn) return;
        btn.onclick = () => {
            const w = window.screen.width;
            const h = window.screen.height;
            const dpr = window.devicePixelRatio;
            document.getElementById('srResult').innerText = `${w} x ${h} (DPR: ${dpr})`;
        };
    }
};

window.EliteToolEngines['speed-test'] = {
    init: function() {
        const btn = document.getElementById('stBtn');
        if(!btn) return;
        btn.onclick = () => {
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if(conn) {
                document.getElementById('stResult').innerText = `~${conn.downlink} Mbps (${conn.effectiveType})`;
            } else {
                document.getElementById('stResult').innerText = "Not supported in this browser.";
            }
        };
    }
};

window.EliteToolEngines['battery-health'] = {
    init: function() {
        const btn = document.getElementById('bhBtn');
        if(!btn) return;
        btn.onclick = async () => {
            if(navigator.getBattery) {
                const batt = await navigator.getBattery();
                document.getElementById('bhResult').innerText = (batt.level * 100) + '%';
                document.getElementById('bhStatus').innerText = batt.charging ? "Charging ⚡" : "On Battery";
            } else {
                document.getElementById('bhResult').innerText = "Not Supported";
            }
        };
    }
};

window.EliteToolEngines['device-info'] = {
    init: function() {
        const btn = document.getElementById('diBtn');
        if(!btn) return;
        btn.onclick = () => {
            const memory = navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'Unknown';
            const cores = navigator.hardwareConcurrency || 'Unknown';
            const ua = navigator.userAgent;
            const platform = navigator.platform;
            document.getElementById('diResult').innerHTML = `
                <li><strong>RAM Estimate:</strong> ${memory}</li>
                <li><strong>CPU Cores:</strong> ${cores}</li>
                <li><strong>Platform:</strong> ${platform}</li>
                <li><strong>Browser Agent:</strong> ${ua}</li>
            `;
        };
    }
};

window.EliteToolEngines['uptime-calc'] = {
    init: function() {
        const btn = document.getElementById('ucBtn');
        if(!btn) return;
        btn.onclick = () => {
            const sla = parseFloat(document.getElementById('ucSla').value);
            if(isNaN(sla)) return;
            const daily = (24 * 60) * ((100 - sla) / 100);
            const monthly = daily * 30;
            const yearly = daily * 365;
            document.getElementById('ucResult').innerHTML = `
                <p><strong>Daily:</strong> ${daily.toFixed(2)} mins</p>
                <p><strong>Monthly:</strong> ${monthly.toFixed(2)} mins</p>
                <p><strong>Yearly:</strong> ${(yearly/60).toFixed(2)} hours</p>
            `;
        };
    }
};
