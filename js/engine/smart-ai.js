window.EliteToolEngines = window.EliteToolEngines || {};

const callGemini = async (prompt, systemPrompt = "You are a helpful AI assistant.") => {
    const apiKey = localStorage.getItem('elite_gemini_key');
    if(!apiKey) {
        alert("Please set your Google Gemini API Key in the settings (cog icon) to use AI tools.");
        return null;
    }

    try {
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
            return `🚨 API Error: ${data.error.message} (${data.error.status})`;
        }

        if (!data.candidates || data.candidates.length === 0) {
            return "⚠️ AI Response blocked by safety filters. Please try a different prompt.";
        }

        const candidate = data.candidates[0];
        if (candidate.finishReason === "SAFETY") {
            return "⚠️ Response blocked due to safety concerns.";
        }

        return candidate.content.parts[0].text;
    } catch(e) {
        console.error("Gemini Fetch Error:", e);
        return "❌ Connection Failed. Please ensure your API key is valid and you have an active internet connection.";
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

/*
window.EliteToolEngines['ai-homework'] = { ... };
window.EliteToolEngines['ai-resume'] = { ... };
window.EliteToolEngines['ai-summary'] = { ... };
window.EliteToolEngines['ai-seo'] = { ... };
window.EliteToolEngines['ai-travel'] = { ... };
*/
// AI Tools are currently under maintenance / construction.
