window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Stopwatch
// ==========================================
window.EliteToolEngines['stopwatch'] = {
    init: function() {
        const display = document.getElementById('swDisplay');
        const start = document.getElementById('swStart');
        const stop = document.getElementById('swStop');
        const reset = document.getElementById('swReset');
        if(!display) return;

        let startTime, timerInterval;
        let elapsed = 0;
        let running = false;

        const format = (ms) => {
            const date = new Date(ms);
            return date.toISOString().substr(11, 8) + '.' + Math.floor((ms%1000)/10).toString().padStart(2,'0');
        };

        start.onclick = () => {
            if(running) return;
            running = true;
            startTime = Date.now() - elapsed;
            timerInterval = setInterval(() => {
                elapsed = Date.now() - startTime;
                display.innerText = format(elapsed);
            }, 10);
        };

        stop.onclick = () => {
            running = false;
            clearInterval(timerInterval);
        };

        reset.onclick = () => {
            running = false;
            clearInterval(timerInterval);
            elapsed = 0;
            display.innerText = '00:00:00.00';
        };
    }
};

// ==========================================
// Countdown Timer
// ==========================================
window.EliteToolEngines['countdown'] = {
    init: function() {
        const startBtn = document.getElementById('cdStart');
        const display = document.getElementById('cdDisplay');
        if(!startBtn) return;
        let timer;
        startBtn.onclick = () => {
            clearInterval(timer);
            let secs = parseInt(document.getElementById('cdSecs').value);
            if(isNaN(secs) || secs <= 0) return;
            startBtn.innerText = "Running...";
            startBtn.disabled = true;
            
            const tick = () => {
                const m = Math.floor(secs / 60).toString().padStart(2,'0');
                const s = (secs % 60).toString().padStart(2,'0');
                display.innerText = `${m}:${s}`;
                if(secs === 0) {
                    clearInterval(timer);
                    startBtn.innerText = "Start Timer";
                    startBtn.disabled = false;
                    alert("Timer Finished!");
                }
                secs--;
            };
            tick();
            timer = setInterval(tick, 1000);
        };
    }
};

// ==========================================
// To-Do List
// ==========================================
window.EliteToolEngines['todo-list'] = {
    init: function() {
        const btn = document.getElementById('tdBtn');
        const input = document.getElementById('tdInput');
        const list = document.getElementById('tdList');
        if(!btn) return;

        let tasks = JSON.parse(localStorage.getItem('elite_todos')) || [];

        const render = () => {
            list.innerHTML = '';
            tasks.forEach((t, i) => {
                const li = document.createElement('li');
                li.style.cssText = "display:flex; justify-content:space-between; padding:10px; background:var(--bg-card); border-bottom:1px solid var(--border-color);";
                li.innerHTML = `
                    <span style="${t.done ? 'text-decoration:line-through;color:var(--text-secondary)' : ''}">${t.text}</span>
                    <div>
                        <button class="btn-icon" style="width:30px;height:30px;" onclick="window.EliteToolEngines['todo-list'].toggle(${i})"><i class="fa-solid fa-check"></i></button>
                        <button class="btn-icon" style="width:30px;height:30px;color:var(--danger)" onclick="window.EliteToolEngines['todo-list'].del(${i})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                list.appendChild(li);
            });
            localStorage.setItem('elite_todos', JSON.stringify(tasks));
        };

        this.toggle = (i) => { tasks[i].done = !tasks[i].done; render(); };
        this.del = (i) => { tasks.splice(i, 1); render(); };

        btn.onclick = () => {
            if(input.value.trim()) {
                tasks.push({text: input.value, done: false});
                input.value = '';
                render();
            }
        };
        render();
    }
};

// ==========================================
// Notes App
// ==========================================
window.EliteToolEngines['notes-app'] = {
    init: function() {
        const text = document.getElementById('naText');
        if(!text) return;
        text.value = localStorage.getItem('elite_notes') || '';
        text.oninput = () => {
            localStorage.setItem('elite_notes', text.value);
        };
    }
};

// ==========================================
// Random Generator
// ==========================================
window.EliteToolEngines['random-gen'] = {
    init: function() {
        const btn = document.getElementById('rgBtn');
        if(!btn) return;
        btn.onclick = () => {
            const min = parseInt(document.getElementById('rgMin').value);
            const max = parseInt(document.getElementById('rgMax').value);
            if(min <= max) {
                const res = Math.floor(Math.random() * (max - min + 1)) + min;
                document.getElementById('rgResult').innerText = res;
            }
        };
    }
};
