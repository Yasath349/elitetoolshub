window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// AI-Style Tools (100% Functional Simulation)
// ==========================================

const typeWriterAI = (element, text, speed = 15) => {
    element.style.display = 'block';
    element.value = '';
    element.innerText = '';
    let i = 0;
    const isInput = element.tagName === 'TEXTAREA' || element.tagName === 'INPUT';
    const type = () => {
        if (i < text.length) {
            if(isInput) element.value += text.charAt(i);
            else element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

const handleAILoader = (loaderId, resultId, callback) => {
    const loader = document.getElementById(loaderId);
    const result = document.getElementById(resultId);
    if(loader) loader.style.display = 'block';
    if(result) result.style.display = 'none';
    
    setTimeout(() => {
        if(loader) loader.style.display = 'none';
        callback();
    }, 2000);
};

window.EliteToolEngines['email-writer'] = {
    init: function() {
        const btn = document.getElementById('ewBtn');
        if(!btn) return;
        btn.onclick = () => {
            const intent = document.getElementById('ewIntent').value || "Project Update";
            const tone = document.getElementById('ewTone').value;
            const result = document.getElementById('ewResult');
            
            handleAILoader('ewLoader', 'ewResult', () => {
                let content = "";
                if(tone === "Professional") {
                    content = `Subject: Update regarding ${intent}\n\nDear Team,\n\nI am writing to provide an update on ${intent}. We have made significant progress and are currently on track to meet our next milestone.\n\nPlease let me know if you have any questions.\n\nBest regards,\n[Your Name]`;
                } else if(tone === "Urgent") {
                    content = `Subject: URGENT: Action required for ${intent}\n\nHi,\n\nThis is a priority request regarding ${intent}. We need to finalize the details by EOD today to avoid delays.\n\nPlease review and provide your feedback immediately.\n\nThanks,\n[Your Name]`;
                } else {
                    content = `Subject: Quick note on ${intent}\n\nHey there,\n\nJust wanted to touch base about ${intent}. Hope everything is going well on your end!\n\nTalk soon,\n[Your Name]`;
                }
                typeWriterAI(result, content);
            });
        };
    }
};

window.EliteToolEngines['blog-idea'] = {
    init: function() {
        const btn = document.getElementById('biBtn');
        if(!btn) return;
        btn.onclick = () => {
            const topic = document.getElementById('biTopic').value || "AI Technology";
            const result = document.getElementById('biResult');
            result.innerHTML = '<div class="loader-ai"></div>';
            
            setTimeout(() => {
                const ideas = [
                    `Top 10 Trends in ${topic} for 2026`,
                    `How to Master ${topic} in 30 Days`,
                    `The Ultimate Guide to ${topic} for Beginners`,
                    `Why ${topic} is the Future of Innovation`,
                    `${topic}: A Deep Dive into Success Strategies`
                ];
                result.innerHTML = '';
                ideas.forEach(id => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong style="color:var(--primary)">${id}</strong>`;
                    result.appendChild(li);
                });
            }, 1800);
        };
    }
};

window.EliteToolEngines['ad-copy'] = {
    init: function() {
        const btn = document.getElementById('acBtn');
        if(!btn) return;
        btn.onclick = () => {
            const prod = document.getElementById('acProd').value || "Elite Tools Hub";
            const ben = document.getElementById('acBen').value || "boosts your productivity";
            const result = document.getElementById('acResult');
            
            handleAILoader('acLoader', 'acResult', () => {
                const copy = `🚀 Tired of wasting time? \n\nDiscover ${prod} - the only solution that ${ben} instantly. \n\n✅ Fast & Efficient\n✅ No Hidden Costs\n✅ Trusted by Professionals\n\n👉 Start your journey with ${prod} today!`;
                typeWriterAI(result, copy);
            });
        };
    }
};

window.EliteToolEngines['product-desc'] = {
    init: function() {
        const btn = document.getElementById('pdBtn');
        if(!btn) return;
        btn.onclick = () => {
            const name = document.getElementById('pdName').value || "Smart Gadget";
            const result = document.getElementById('pdResult');
            result.style.display = 'none';
            const loader = document.createElement('div');
            loader.className = 'loader-ai';
            btn.after(loader);
            
            setTimeout(() => {
                loader.remove();
                const desc = `The all-new ${name} is designed to seamlessly integrate into your daily routine. With state-of-the-art engineering and a focus on user experience, the ${name} offers unmatched quality and performance. Whether you're at work or at home, it provides the reliability you need to stay ahead.`;
                typeWriterAI(result, desc);
            }, 2000);
        };
    }
};

window.EliteToolEngines['story-starter'] = {
    init: function() {
        const btn = document.getElementById('ssBtn');
        if(!btn) return;
        btn.onclick = () => {
            const genre = document.getElementById('ssGenre').value;
            const result = document.getElementById('ssResult');
            result.innerHTML = '<div class="loader-ai"></div>';
            
            setTimeout(() => {
                let prompt = "";
                if(genre==="Sci-Fi") prompt = "The last transmission from Earth wasn't a distress signal; it was a countdown that had finally reached zero.";
                else if(genre==="Fantasy") prompt = "Everyone in the village was born with a single magical word etched onto their palm. Elara's word had just started to glow.";
                else if(genre==="Mystery") prompt = "The inheritance was huge, but the condition was simple: live in the manor for one week without ever looking in a mirror.";
                else prompt = "He had forgotten everything about her, except the way her voice sounded when she said goodbye.";
                result.innerHTML = `<i class="fa-solid fa-quote-left" style="color:var(--primary); font-size:1.5rem; margin-right:10px;"></i> ${prompt}`;
            }, 1600);
        };
    }
};
