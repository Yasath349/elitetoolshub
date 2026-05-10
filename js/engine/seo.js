window.EliteToolEngines = window.EliteToolEngines || {};

// ==========================================
// Web / SEO Tools
// ==========================================
window.EliteToolEngines['meta-gen'] = {
    init: function() {
        const btn = document.getElementById('mgBtn');
        if(!btn) return;
        btn.onclick = () => {
            const title = document.getElementById('mgTitle').value;
            const desc = document.getElementById('mgDesc').value;
            const keys = document.getElementById('mgKeys').value;
            let tags = `<title>${title}</title>\n`;
            if(desc) tags += `<meta name="description" content="${desc}">\n`;
            if(keys) tags += `<meta name="keywords" content="${keys}">\n`;
            tags += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
            document.getElementById('mgResult').value = tags;
        };
    }
};

window.EliteToolEngines['og-preview'] = {
    init: function() {
        const btn = document.getElementById('ogBtn');
        if(!btn) return;
        btn.onclick = () => {
            const title = document.getElementById('ogTitle').value;
            const desc = document.getElementById('ogDesc').value;
            const img = document.getElementById('ogImg').value || 'https://via.placeholder.com/1200x630';
            document.getElementById('ogResult').innerHTML = `
                <div style="width:100%; height:300px; background:url('${img}') center/cover no-repeat;"></div>
                <div style="padding:15px; background:var(--bg-card-hover);">
                    <h3 style="margin-bottom:5px;">${title}</h3>
                    <p style="font-size:0.9rem; color:var(--text-secondary);">${desc}</p>
                </div>
            `;
        };
    }
};

window.EliteToolEngines['robots-gen'] = {
    init: function() {
        const btn = document.getElementById('rgBtn');
        if(!btn) return;
        btn.onclick = () => {
            const allow = document.getElementById('rgAllow').value;
            const sitemap = document.getElementById('rgSitemap').value;
            let txt = "User-agent: *\n";
            txt += allow === 'yes' ? "Allow: /\n" : "Disallow: /\n";
            if(sitemap) txt += `\nSitemap: ${sitemap}\n`;
            document.getElementById('rgResult').value = txt;
        };
    }
};

window.EliteToolEngines['sitemap-gen'] = {
    init: function() {
        const btn = document.getElementById('smBtn');
        if(!btn) return;
        btn.onclick = () => {
            const urls = document.getElementById('smInput').value.split('\n').filter(u=>u.trim()!=='');
            let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
            urls.forEach(u => {
                xml += `  <url>\n    <loc>${u.trim()}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
            });
            xml += `</urlset>`;
            document.getElementById('smResult').value = xml;
        };
    }
};

window.EliteToolEngines['domain-age'] = {
    init: function() {
        const btn = document.getElementById('daBtn');
        if(!btn) return;
        btn.onclick = () => {
            const domain = document.getElementById('daInput').value;
            if(!domain) return;
            // Simulated WHOIS lookup
            document.getElementById('daResult').innerHTML = `<p>Simulating WHOIS for <strong>${domain}</strong>...</p><p>Registration Date: ~2015 (Mocked Data due to CORS)</p>`;
        };
    }
};
