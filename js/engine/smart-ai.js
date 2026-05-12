window.EliteToolEngines = window.EliteToolEngines || {};

const callGemini = async (prompt, systemPrompt = "You are a helpful AI assistant.") => {
    const apiKey = localStorage.getItem('elite_gemini_key');
    if(!apiKey) {
        alert("Please set your Google Gemini API Key in the settings (cog icon) to use AI tools.");
        return null;
    }

    try {
        // Gemini API uses a system instruction and user content structure
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${systemPrompt}\n\nUser Question: ${prompt}` }]
                }]
            })
        });
        const data = await response.json();
        
        if (data.error) {
            console.error(data.error);
            return "Error: " + data.error.message;
        }

        return data.candidates[0].content.parts[0].text;
    } catch(e) {
        console.error(e);
        return "Error connecting to Gemini API. Please check your key and connection.";
    }
};

const typeWriter = (text, elementId) => {
    const el = document.getElementById(elementId);
    if(!el) return;
    el.innerHTML = "";
    el.style.display = "block";
    
    // Convert markdown-ish bold to HTML for simple preview
    const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\n/g, '<br>');

    let i = 0;
    const interval = setInterval(() => {
        // Note: Simple char-by-char with HTML is tricky, so we inject then reveal or use a safer approach
        // For simplicity and speed, we'll use innerHTML directly for the whole block but keep the "reveal" feel
        el.innerHTML = formatted.substring(0, i);
        i += 3; // Type faster for longer responses
        if(i >= formatted.length + 3) {
            el.innerHTML = formatted;
            clearInterval(interval);
        }
    }, 10);
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
            const resArea = document.getElementById('hwResult');
            loader.style.display = "block";
            resArea.style.display = "none";
            
            const res = await callGemini(q, "You are a professional tutor. Solve the question and explain the steps clearly.");
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
            const resArea = document.getElementById('rsResult');
            loader.style.display = "block";
            resArea.style.display = "none";

            const res = await callGemini(details, "Create a professional resume based on these details. Use markdown formatting.");
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
            const resArea = document.getElementById('smResult');
            loader.style.display = "block";
            resArea.style.display = "none";

            const res = await callGemini(text, "Summarize this text into short, easy-to-read bullet points.");
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
            const resArea = document.getElementById('seoResult');
            loader.style.display = "block";
            resArea.style.display = "none";

            const res = await callGemini(topic, "Generate a list of high-traffic SEO keywords for this topic. Include estimated difficulty.");
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
            const resArea = document.getElementById('trResult');
            loader.style.display = "block";
            resArea.style.display = "none";

            const res = await callGemini(destination, "Create a 3-day travel itinerary with budget estimates and must-visit spots.");
            loader.style.display = "none";
            if(res) typeWriter(res, 'trResult');
        };
    }
};
