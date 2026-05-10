window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// AI-Style Tools
// ==========================================
// Helper for simulated "AI" typing effect
const typeWriterAI = (element, text, speed = 20) => {
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

window.EliteToolEngines['email-writer'] = {
    init: function() {
        const btn = document.getElementById('ewBtn');
        if(!btn) return;
        btn.onclick = () => {
            const intent = document.getElementById('ewIntent').value || "checking in";
            const tone = document.getElementById('ewTone').value;
            const result = document.getElementById('ewResult');
            let content = "";
            if(tone === "Professional") {
                content = `Subject: Regarding ${intent}\n\nDear [Name],\n\nI hope this email finds you well.\n\nI am writing to you today regarding ${intent}. Could we please schedule a brief time to discuss this further?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`;
            } else if(tone === "Casual") {
                content = `Subject: Quick question about ${intent}\n\nHey [Name],\n\nHope you're having a good day! Just reaching out about ${intent}. Let me know what you think when you have a sec.\n\nCheers,\n[Your Name]`;
            } else {
                content = `Subject: URGENT: ${intent}\n\nHi [Name],\n\nPlease advise on ${intent} as soon as possible. This requires immediate attention.\n\nThanks,\n[Your Name]`;
            }
            typeWriterAI(result, content, 10);
        };
    }
};

window.EliteToolEngines['blog-idea'] = {
    init: function() {
        const btn = document.getElementById('biBtn');
        if(!btn) return;
        btn.onclick = () => {
            const topic = document.getElementById('biTopic').value || "technology";
            const ideas = [
                `The Future of ${topic}: What to Expect in 2025`,
                `10 Things Everyone Gets Wrong About ${topic}`,
                `A Beginner's Guide to Mastering ${topic}`,
                `How ${topic} is Changing the World`,
                `The Ultimate Resource List for ${topic}`
            ];
            const ul = document.getElementById('biResult');
            ul.innerHTML = '';
            ideas.forEach(id => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${id}</strong>`;
                ul.appendChild(li);
            });
        };
    }
};

window.EliteToolEngines['ad-copy'] = {
    init: function() {
        const btn = document.getElementById('acBtn');
        if(!btn) return;
        btn.onclick = () => {
            const prod = document.getElementById('acProd').value || "Our Product";
            const ben = document.getElementById('acBen').value || "saves you time";
            const res = document.getElementById('acResult');
            const copy = `🚀 Stop struggling with your daily tasks! \n\nIntroducing ${prod} - the ultimate solution that ${ben}. \n\n✅ Fast & Easy\n✅ Proven Results\n✅ 100% Guaranteed\n\n👉 Click here to transform your workflow today!`;
            typeWriterAI(res, copy, 10);
        };
    }
};

window.EliteToolEngines['product-desc'] = {
    init: function() {
        const btn = document.getElementById('pdBtn');
        if(!btn) return;
        btn.onclick = () => {
            const name = document.getElementById('pdName').value || "Premium Item";
            const res = document.getElementById('pdResult');
            const desc = `Elevate your lifestyle with the ${name}. Crafted with precision and designed for ultimate performance, this product stands out from the rest. Whether you're a professional or a casual user, the ${name} delivers unparalleled reliability. Upgrade today and experience the difference.`;
            typeWriterAI(res, desc, 10);
        };
    }
};

window.EliteToolEngines['story-starter'] = {
    init: function() {
        const btn = document.getElementById('ssBtn');
        if(!btn) return;
        btn.onclick = () => {
            const genre = document.getElementById('ssGenre').value;
            const res = document.getElementById('ssResult');
            let prompt = "";
            if(genre==="Sci-Fi") prompt = "The starship's alarms blared, but there were no enemy vessels on the radar. The threat was already inside.";
            else if(genre==="Fantasy") prompt = "The old sword was said to be useless, until it began whispering ancient secrets into her mind.";
            else if(genre==="Mystery") prompt = "The room was locked from the inside, the windows sealed, yet the diamond was gone.";
            else prompt = "They met in a crowded coffee shop, entirely by accident, or so they thought.";
            typeWriterAI(res, prompt, 20);
        };
    }
};
