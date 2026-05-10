window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Word Counter
// ==========================================
window.EliteToolEngines['word-counter'] = {
    init: function() {
        const text = document.getElementById('wcText');
        if(!text) return;
        text.oninput = () => {
            const val = text.value;
            const words = val.trim().split(/\s+/).filter(w=>w.length>0).length;
            document.getElementById('wcWords').innerText = words;
            document.getElementById('wcChars').innerText = val.length;
        };
    }
};

// ==========================================
// Case Converter
// ==========================================
window.EliteToolEngines['case-converter'] = {
    init: function() {
        const text = document.getElementById('caseText');
        if(!text) return;
        document.getElementById('cUpper').onclick = () => text.value = text.value.toUpperCase();
        document.getElementById('cLower').onclick = () => text.value = text.value.toLowerCase();
        document.getElementById('cTitle').onclick = () => {
            text.value = text.value.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        };
        document.getElementById('cCamel').onclick = () => {
            text.value = text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        };
    }
};

// ==========================================
// Text to Speech
// ==========================================
window.EliteToolEngines['tts'] = {
    init: function() {
        const synth = window.speechSynthesis;
        const voiceSelect = document.getElementById('ttsVoice');
        const btn = document.getElementById('ttsPlay');
        if(!btn) return;

        let voices = [];
        const populate = () => {
            voices = synth.getVoices();
            voiceSelect.innerHTML = '';
            voices.forEach((v, i) => {
                const opt = document.createElement('option');
                opt.value = i;
                opt.textContent = `${v.name} (${v.lang})`;
                voiceSelect.appendChild(opt);
            });
        };
        populate();
        if(synth.onvoiceschanged !== undefined) synth.onvoiceschanged = populate;

        btn.onclick = () => {
            const text = document.getElementById('ttsText').value;
            if(text) {
                const utter = new SpeechSynthesisUtterance(text);
                const selected = voices[voiceSelect.value];
                if(selected) utter.voice = selected;
                synth.speak(utter);
            }
        };
    }
};

// ==========================================
// Speech to Text
// ==========================================
window.EliteToolEngines['stt'] = {
    init: function() {
        const startBtn = document.getElementById('sttStart');
        const stopBtn = document.getElementById('sttStop');
        const res = document.getElementById('sttResult');
        if(!startBtn) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if(!SpeechRecognition) {
            res.innerText = "Speech Recognition not supported in this browser.";
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (e) => {
            let final = '';
            for(let i=0; i<e.results.length; i++) {
                final += e.results[i][0].transcript;
            }
            res.innerText = final;
        };

        startBtn.onclick = () => {
            recognition.start();
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline-flex';
            res.innerText = "Listening...";
        };

        stopBtn.onclick = () => {
            recognition.stop();
            startBtn.style.display = 'inline-flex';
            stopBtn.style.display = 'none';
        };
    }
};

// ==========================================
// Remove Spaces
// ==========================================
window.EliteToolEngines['remove-spaces'] = {
    init: function() {
        const btn = document.getElementById('rsBtn');
        if(!btn) return;
        btn.onclick = () => {
            const text = document.getElementById('rsText');
            text.value = text.value.replace(/\s+/g, ' ').trim();
        };
    }
};
