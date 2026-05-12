window.EliteToolEngines = window.EliteToolEngines || {};

const callOpenAI = async (prompt, systemPrompt = "You are a helpful AI assistant.") => {
    const apiKey = localStorage.getItem('elite_openai_key');
    if(!apiKey) {
        alert("Please set your OpenAI API Key in the settings (cog icon) to use AI tools.");
        return null;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: prompt }
                ]
            })
        });
        const data = await response.json();
        return data.choices[0].message.content;
    } catch(e) {
        console.error(e);
        return "Error connecting to OpenAI. Please check your API key.";
    }
};

const typeWriter = (text, elementId) => {
    const el = document.getElementById(elementId);
    if(!el) return;
    el.innerHTML = "";
    el.style.display = "block";
    let i = 0;
    const interval = setInterval(() => {
        el.innerHTML += text.charAt(i);
        i++;
        if(i >= text.length) clearInterval(interval);
    }, 15);
};

// --- TOOLS ---

window.EliteToolEngines['ai-homework'] = {
    init: function() {
        const btn = document.getElementById('hwBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const q = document.getElementById('hwInput').value;
            if(!q) return;
            const loader = document.getElementById('hwLoader');
            loader.style.display = "block";
            const res = await callOpenAI(q, "You are a professional tutor. Solve the question and explain the steps clearly.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'hwResult');
        };
    }
};

window.EliteToolEngines['ai-resume'] = {
    init: function() {
        const btn = document.getElementById('rsBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const details = document.getElementById('rsInput').value;
            if(!details) return;
            const loader = document.getElementById('rsLoader');
            loader.style.display = "block";
            const res = await callOpenAI(details, "Create a professional resume based on these details. Use markdown formatting.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'rsResult');
        };
    }
};

window.EliteToolEngines['ai-summary'] = {
    init: function() {
        const btn = document.getElementById('smBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const text = document.getElementById('smInput').value;
            if(!text) return;
            const loader = document.getElementById('smLoader');
            loader.style.display = "block";
            const res = await callOpenAI(text, "Summarize this text into short, easy-to-read bullet points.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'smResult');
        };
    }
};

window.EliteToolEngines['ai-seo'] = {
    init: function() {
        const btn = document.getElementById('seoBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const topic = document.getElementById('seoInput').value;
            if(!topic) return;
            const loader = document.getElementById('seoLoader');
            loader.style.display = "block";
            const res = await callOpenAI(topic, "Generate a list of high-traffic SEO keywords for this topic. Include estimated difficulty.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'seoResult');
        };
    }
};

window.EliteToolEngines['ai-travel'] = {
    init: function() {
        const btn = document.getElementById('trBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const destination = document.getElementById('trInput').value;
            if(!destination) return;
            const loader = document.getElementById('trLoader');
            loader.style.display = "block";
            const res = await callOpenAI(destination, "Create a 3-day travel itinerary with budget estimates and must-visit spots.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'trResult');
        };
    }
};
