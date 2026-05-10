window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Hashtag Generator
// ==========================================
window.EliteToolEngines['hashtag-gen'] = {
    init: function() {
        const btn = document.getElementById('htBtn');
        if(!btn) return;
        btn.onclick = () => {
            const input = document.getElementById('htInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
            if(!input) return;
            const suffixes = ['life', 'vibes', 'goals', 'mood', 'style', 'daily', 'love', 'art', 'fun', 'pic', 'gram', 'oftheday', 'time'];
            const tags = ['#'+input];
            for(let i=0; i<10; i++) {
                tags.push('#' + input + suffixes[Math.floor(Math.random() * suffixes.length)]);
            }
            // Add some generic popular ones
            tags.push('#instagood', '#viral', '#trending', '#explorepage');
            document.getElementById('htResult').value = [...new Set(tags)].join(' ');
        };
    }
};

// ==========================================
// YT Title Generator
// ==========================================
window.EliteToolEngines['yt-title-gen'] = {
    init: function() {
        const btn = document.getElementById('ytBtn');
        if(!btn) return;
        btn.onclick = () => {
            const topic = document.getElementById('ytInput').value;
            if(!topic) return;
            const templates = [
                `The TRUTH About ${topic} (Must Watch)`,
                `I Tried ${topic} For 30 Days And This Happened`,
                `${topic} For Beginners (Complete Guide)`,
                `Stop Doing ${topic} Like This!`,
                `10 Secrets About ${topic} You Didn't Know`,
                `How To Master ${topic} In 2024`,
                `The Ultimate ${topic} Tutorial`
            ];
            const ul = document.getElementById('ytResult');
            ul.innerHTML = templates.map(t => `<li><strong>${t}</strong></li>`).join('');
        };
    }
};
