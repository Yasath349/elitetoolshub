window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Productivity
// ==========================================
window.EliteToolEngines['habit-tracker'] = {
    init: function() {
        const btn = document.getElementById('htAddBtn');
        const list = document.getElementById('htList');
        let habits = JSON.parse(localStorage.getItem('elite_habits')) || [];
        
        const render = () => {
            list.innerHTML = '';
            habits.forEach((h, i) => {
                list.innerHTML += `<li style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border-color);">
                    <span style="${h.done ? 'text-decoration:line-through;color:var(--success)' : ''}">${h.text}</span>
                    <button class="btn-icon" onclick="window.EliteToolEngines['habit-tracker'].toggle(${i})"><i class="fa-solid fa-check"></i></button>
                </li>`;
            });
            localStorage.setItem('elite_habits', JSON.stringify(habits));
        };
        
        this.toggle = (i) => { habits[i].done = !habits[i].done; render(); };
        
        if(!btn) return;
        btn.onclick = () => {
            const val = document.getElementById('htInput').value;
            if(val) { habits.push({text: val, done: false}); render(); document.getElementById('htInput').value=''; }
        };
        render();
    }
};

window.EliteToolEngines['pomodoro'] = {
    init: function() {
        const start = document.getElementById('pomoStart');
        const pause = document.getElementById('pomoPause');
        const reset = document.getElementById('pomoReset');
        const display = document.getElementById('pomoDisplay');
        const status = document.getElementById('pomoStatus');
        if(!start) return;

        let timer;
        let timeLeft = 25 * 60;
        let isRunning = false;

        const update = () => {
            const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const s = (timeLeft % 60).toString().padStart(2, '0');
            display.innerText = `${m}:${s}`;
        };

        start.onclick = () => {
            if(isRunning) return;
            isRunning = true;
            timer = setInterval(() => {
                timeLeft--;
                update();
                if(timeLeft <= 0) {
                    clearInterval(timer);
                    alert("Pomodoro Session Complete!");
                    timeLeft = 5 * 60; // short break
                    status.innerText = "Short Break";
                    isRunning = false;
                    update();
                }
            }, 1000);
        };

        pause.onclick = () => { clearInterval(timer); isRunning = false; };
        reset.onclick = () => { clearInterval(timer); isRunning = false; timeLeft = 25 * 60; status.innerText = "Work Session"; update(); };
    }
};

window.EliteToolEngines['meeting-planner'] = {
    init: function() {
        const btn = document.getElementById('mpBtn');
        if(!btn) return;
        btn.onclick = () => {
            const topic = document.getElementById('mpTopic').value || "General Meeting";
            const dur = parseInt(document.getElementById('mpDur').value) || 30;
            const res = document.getElementById('mpResult');
            res.innerHTML = `
                <h3 style="margin-bottom:10px;">${topic} (${dur} mins)</h3>
                <ul style="padding-left:20px;">
                    <li><strong>Intro & Objective:</strong> ${Math.max(5, Math.floor(dur*0.1))} mins</li>
                    <li><strong>Main Discussion:</strong> ${Math.floor(dur*0.6)} mins</li>
                    <li><strong>Q&A / Feedback:</strong> ${Math.floor(dur*0.2)} mins</li>
                    <li><strong>Action Items / Wrap-up:</strong> ${Math.floor(dur*0.1)} mins</li>
                </ul>
            `;
        };
    }
};

window.EliteToolEngines['daily-planner'] = {
    init: function() {
        const btn = document.getElementById('dpBtn');
        if(!btn) return;
        btn.onclick = () => {
            const focus = document.getElementById('dpFocus').value || "Deep Work";
            const res = document.getElementById('dpResult');
            res.innerHTML = `
                <ul style="list-style:none; line-height:2;">
                    <li><strong>08:00 AM:</strong> Planning & Email Triage</li>
                    <li><strong>09:00 AM:</strong> Primary Focus Session (${focus})</li>
                    <li><strong>11:30 AM:</strong> Secondary Tasks / Meetings</li>
                    <li><strong>01:00 PM:</strong> Lunch & Recharge</li>
                    <li><strong>02:00 PM:</strong> Deep Work Block 2</li>
                    <li><strong>04:30 PM:</strong> Wrap-up & Tomorrow's Plan</li>
                </ul>
            `;
        };
    }
};

window.EliteToolEngines['goal-tracker'] = {
    init: function() {
        const btn = document.getElementById('gtBtn');
        if(!btn) return;
        btn.onclick = () => {
            const target = parseFloat(document.getElementById('gtTarget').value);
            const current = parseFloat(document.getElementById('gtCurrent').value);
            if(target > 0) {
                let pct = Math.min(100, Math.max(0, (current/target)*100));
                document.getElementById('gtBar').style.width = pct + '%';
                document.getElementById('gtStatus').innerText = `${pct.toFixed(1)}% Complete`;
            }
        };
    }
};
