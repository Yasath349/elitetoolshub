export default async () => {
    const key = process.env.GEMINI_API_KEY;

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + key,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello" }] }]
            })
        }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data));
};