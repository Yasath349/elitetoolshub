document.addEventListener('DOMContentLoaded', () => {

    // ── DOM refs ──
    const contentArea    = document.getElementById('contentArea');
    const categoryNav    = document.getElementById('categoryNav');
    const searchInput    = document.getElementById('toolSearch');
    const themeToggle    = document.getElementById('themeToggle');
    const mobileMenuBtn  = document.getElementById('mobileMenuBtn');
    const mobileDrawer   = document.getElementById('mobileDrawer');
    const drawerOverlay  = document.getElementById('drawerOverlay');
    const mobileDrawerNav= document.getElementById('mobileDrawerNav');

    // ── Helper: FontAwesome Class ──
    const getIconClass = (icon) => {
        const brands = ['facebook', 'instagram', 'twitter', 'youtube', 'tiktok', 'linkedin', 'github', 'discord', 'x-twitter'];
        return brands.some(b => icon.includes(b)) ? 'fa-brands' : 'fa-solid';
    };

    // ── Theme ──
    const applyTheme = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            themeToggle.title = 'Switch to Light Mode';
        } else {
            document.documentElement.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            themeToggle.title = 'Switch to Dark Mode';
        }
        // Keep settings buttons in sync
        const dBtn = document.getElementById('settingDark');
        const lBtn = document.getElementById('settingLight');
        if (dBtn) dBtn.style.borderColor = isDark  ? 'var(--primary)' : 'var(--border)';
        if (lBtn) lBtn.style.borderColor = !isDark ? 'var(--primary)' : 'var(--border)';
    };

    const initTheme = () => {
        const saved = localStorage.getItem('elite_theme');
        applyTheme(saved ? saved === 'dark' : true);
    };

    themeToggle.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        localStorage.setItem('elite_theme', isDark ? 'dark' : 'light');
        applyTheme(isDark);
    });

    // ── Scroll to Top Logic ──
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // ── Mobile Drawer ──
    mobileMenuBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
    });

    const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
    };

    // ── Render Category Nav (TOP TABS) ──
    const renderCategoryNav = () => {
        categoryNav.innerHTML = '';
        mobileDrawerNav.innerHTML = '';

        // Home tab
        const homeTab = document.createElement('button');
        homeTab.className = 'cat-tab home-tab';
        homeTab.id = 'cat-home';
        homeTab.innerHTML = '<i class="fa-solid fa-house"></i> Home';
        homeTab.addEventListener('click', () => {
            window.loadTool(null);
            closeDrawer();
        });
        categoryNav.appendChild(homeTab);

        // Category tabs
        toolCategories.forEach(cat => {
            const tab = document.createElement('button');
            tab.className = 'cat-tab';
            tab.id = `cat-${cat.id}`;
            tab.innerHTML = `<i class="${getIconClass(cat.icon)} ${cat.icon}"></i> ${cat.name}`;
            tab.addEventListener('click', () => {
                renderCategory(cat.id);
                setActiveTab(cat.id);
                closeDrawer();
            });
            categoryNav.appendChild(tab);

            // Mobile drawer section
            const catTitle = document.createElement('div');
            catTitle.className = 'drawer-cat-title';
            catTitle.textContent = cat.name;
            mobileDrawerNav.appendChild(catTitle);

            // Mobile drawer items
            const toolsToRender = cat.isSuite 
                ? cat.sections.flatMap(s => s.tools) 
                : cat.tools;

            toolsToRender.forEach(tool => {
                const btn = document.createElement('button');
                btn.className = 'drawer-item';
                btn.innerHTML = `<i class="${getIconClass(tool.icon)} ${tool.icon}"></i> ${tool.name}`;
                btn.addEventListener('click', () => {
                    window.loadTool(tool.id);
                    closeDrawer();
                });
                mobileDrawerNav.appendChild(btn);
            });
        });
    };

    const setActiveTab = (catId) => {
        document.querySelectorAll('.cat-tab').forEach(t => {
            t.classList.remove('active');
            if (t.id === `cat-${catId || 'home'}`) {
                t.classList.add('active');
                // Scroll into view if off-screen
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
        if (!catId) {
            const homeTab = document.getElementById('cat-home');
            if (homeTab) {
                homeTab.classList.add('active');
                homeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    // ── Render Category view (single category) ──
    const renderCategory = (catId) => {
        const cat = toolCategories.find(c => c.id === catId);
        if (!cat) return;

        setBreadcrumb(`
            <span onclick="window.loadTool(null)">Home</span>
            <i class="fa-solid fa-chevron-right"></i>
            <span class="active">${cat.name}</span>
        `);

        if (cat.isSuite) {
            contentArea.innerHTML = `
                <div class="tool-view">
                    <div class="section-title">
                        <i class="${getIconClass(cat.icon)} ${cat.icon}"></i>
                        ${cat.name}
                    </div>
                    ${cat.sections.map(section => `
                        <div class="suite-section" style="margin-top:30px;">
                            <h3 style="margin-bottom:15px; color:var(--primary); display:flex; align-items:center; gap:10px;">
                                <i class="fa-solid fa-folder-open"></i> ${section.name}
                            </h3>
                            <div class="tools-grid">
                                ${section.tools.map(tool => `
                                    <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                                        <div class="tool-icon-wrapper">
                                            <i class="fa-solid ${tool.icon}"></i>
                                        </div>
                                        <h3>${tool.name}</h3>
                                        <p>${tool.desc}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            contentArea.innerHTML = `
                <div class="tool-view">
                    <div class="section-title">
                        <i class="${getIconClass(cat.icon)} ${cat.icon}"></i>
                        ${cat.name}
                    </div>
                    <div class="tools-grid">
                        ${cat.tools.map(tool => `
                            <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                                <div class="tool-icon-wrapper">
                                    <i class="${getIconClass(tool.icon)} ${tool.icon}"></i>
                                </div>
                                <h3>${tool.name}</h3>
                                <p>${tool.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    };

    // ── Search ──
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        if (!term) { renderDashboard(); setActiveTab(null); return; }

        const results = allTools.filter(t =>
            t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term)
        );

        setBreadcrumb(`<span class="active">Search: "${e.target.value}"</span>`);
        setActiveTab(null);

        contentArea.innerHTML = `
            <div class="tool-view">
                <div class="section-title">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    ${results.length} result(s) for "${e.target.value}"
                </div>
                <div class="tools-grid">
                    ${results.length ? results.map(tool => `
                        <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                            <div class="tool-icon-wrapper">
                                <i class="${getIconClass(tool.icon)} ${tool.icon}"></i>
                            </div>
                            <h3>${tool.name}</h3>
                            <p>${tool.desc}</p>
                        </div>
                    `).join('') : `<p style="color:var(--text-2);padding:20px">No tools found. Try a different keyword.</p>`}
                </div>
            </div>
        `;
    });

    // ── Breadcrumb helper ──
    const setBreadcrumb = (html) => {
        let bc = document.querySelector('.breadcrumbs');
        if (!bc) {
            bc = document.createElement('div');
            bc.className = 'breadcrumbs';
            contentArea.before(bc);
        }
        bc.innerHTML = html;
    };

    // ── Global loadTool ──
    window.loadTool = (id) => {
        searchInput.value = '';
        if (!id) {
            renderDashboard();
            setActiveTab(null);
            window.location.hash = '';
            // Reset SEO
            document.title = "Elite Tools Hub - 70+ Free Professional Online Tools";
            document.querySelector('meta[name="description"]').setAttribute("content", "Elite Tools Hub offers 70+ professional, free online tools including calculators, text processing, file converters, SEO tools, AI generators & more.");
            return;
        }
        renderTool(id);
        // Activate correct category tab (Updated for Suite support)
        const cat = toolCategories.find(c => {
            if (c.isSuite) return c.sections.some(s => s.tools.some(t => t.id === id));
            return c.tools.some(t => t.id === id);
        });
        if (cat) setActiveTab(cat.id);
        window.location.hash = id;

        // Update SEO
        const tool = getToolById(id);
        if (tool) {
            document.title = `${tool.name} - Elite Tools Hub`;
            document.querySelector('meta[name="description"]').setAttribute("content", tool.desc);
        }
    };

    // ── Keyboard Shortcuts ──
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // ── Copy Utility ──
    window.copyToClipboard = (text, btnElement) => {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            const original = btnElement.innerHTML;
            btnElement.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            btnElement.classList.add('btn-success');
            setTimeout(() => {
                btnElement.innerHTML = original;
                btnElement.classList.remove('btn-success');
            }, 2000);
        });
    };

    // ── Dashboard ──
    const renderDashboard = () => {
        setBreadcrumb('<span class="active">Dashboard</span>');

        let html = `
            <div class="hero-section">
                <div class="hero-content">
                    <h2>Your All-in-One Tool Suite ⚡</h2>
                    <p>70+ professional browser-based utilities for productivity, development, design &amp; daily life — all completely free.</p>
                    <div class="hero-stats">
                        <div class="hero-stat"><span class="stat-num">70+</span><span class="stat-label">Free Tools</span></div>
                        <div class="hero-stat"><span class="stat-num">15</span><span class="stat-label">Categories</span></div>
                        <div class="hero-stat"><span class="stat-num">100%</span><span class="stat-label">Secure</span></div>
                    </div>
                </div>
            </div>

            <div class="about-section" style="margin-bottom: 40px; padding: 20px; border-radius: var(--radius-lg); background: var(--bg-card); border: 1px solid var(--border);">
                <h3 style="font-family: 'Outfit', sans-serif; margin-bottom: 10px;">Why Elite Tools Hub?</h3>
                <p style="font-size: 0.9rem; color: var(--text-2);">
                    Elite Tools Hub is designed for professionals who need fast, reliable, and privacy-focused utilities. 
                    All our tools run <strong>locally in your browser</strong>, meaning your data never leaves your device. 
                    No registration, no hidden costs, just pure productivity.
                </p>
            </div>
        `;

        toolCategories.forEach(cat => {
            const toolsToRender = cat.isSuite 
                ? cat.sections.flatMap(s => s.tools) 
                : cat.tools;

            html += `
                <div class="section-title">
                    <i class="${getIconClass(cat.icon)} ${cat.icon}"></i>
                    ${cat.name}
                </div>
                <div class="tools-grid">
                    ${toolsToRender.map(tool => `
                        <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                            <div class="tool-icon-wrapper">
                                <i class="${getIconClass(tool.icon)} ${tool.icon}"></i>
                            </div>
                            <h3>${tool.name}</h3>
                            <p>${tool.desc}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        });

        contentArea.innerHTML = html;
    };

    // ── Render Tool ──
    const renderTool = (id) => {
        const tool = getToolById(id);
        if (!tool) return;
        const cat = toolCategories.find(c => {
            if (c.isSuite) return c.sections.some(s => s.tools.some(t => t.id === id));
            return c.tools.some(t => t.id === id);
        });

        setBreadcrumb(`
            <span onclick="window.loadTool(null)">Home</span>
            <i class="fa-solid fa-chevron-right"></i>
            <span onclick="window.renderCategory && window.renderCategory('${cat.id}')">${cat.name}</span>
            <i class="fa-solid fa-chevron-right"></i>
            <span class="active">${tool.name}</span>
        `);

        const uiTemplate = window.EliteTemplates[id] || `<p style="color:var(--text-2)">UI for ${id} coming soon.</p>`;

        contentArea.innerHTML = `
            <div class="tool-view fade-in">
                <div class="tool-header">
                    <h2>${tool.name}</h2>
                    <p>${tool.desc}</p>
                </div>
                <div class="tool-workspace">${uiTemplate}</div>
            </div>
        `;

        if (window.EliteToolEngines && window.EliteToolEngines[id]) {
            setTimeout(() => window.EliteToolEngines[id].init(), 0);
        } else {
            contentArea.innerHTML += `
                <div class="tool-view" style="margin-top:16px">
                    <div class="tool-workspace" style="text-align:center;padding:40px;color:var(--warning)">
                        <i class="fa-solid fa-person-digging" style="font-size:2.5rem;margin-bottom:12px;display:block"></i>
                        <h3>Under Construction</h3>
                        <p style="color:var(--text-2);margin-top:6px">The engine for this tool is being developed.</p>
                    </div>
                </div>`;
        }
    };

    // expose renderCategory globally for breadcrumb clicks
    window.renderCategory = renderCategory;

    // ── Settings Modal ──
    window.openSettingsModal  = () => document.getElementById('settingsModal').classList.add('active');
    window.closeSettingsModal = () => document.getElementById('settingsModal').classList.remove('active');
    window.openNotifModal     = () => document.getElementById('notifModal').classList.add('active');
    window.closeNotifModal    = () => document.getElementById('notifModal').classList.remove('active');

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    // Theme preference (FIXED - uses 'elite_theme' key consistently)
    window.setThemePref = (mode) => {
        const isDark = mode === 'dark';
        localStorage.setItem('elite_theme', mode);
        applyTheme(isDark);
        if (isDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    // Accent color (FIXED - also updates gradient)
    window.setAccent = (hex) => {
        document.documentElement.style.setProperty('--primary', hex);
        document.documentElement.style.setProperty('--primary-glow', hex + '4d');
        document.documentElement.style.setProperty('--primary-gradient',
            `linear-gradient(135deg, ${hex}, ${shiftHue(hex, 30)})`);
        localStorage.setItem('elite_accent', hex);
        // Mark active swatch
        document.querySelectorAll('.swatch').forEach(s => {
            s.classList.toggle('active-swatch', s.getAttribute('data-color') === hex);
        });
    };

    // Simple hue shift helper for gradient end color
    const shiftHue = (hex, deg) => {
        let r = parseInt(hex.slice(1,3), 16);
        let g = parseInt(hex.slice(3,5), 16);
        let b = parseInt(hex.slice(5,7), 16);

        // Convert RGB to HSL-ish shift
        r = Math.min(255, Math.max(0, r + (deg * 0.5)));
        g = Math.min(255, Math.max(0, g - (deg * 0.2)));
        b = Math.min(255, Math.max(0, b + deg));

        return '#' + [r, g, b].map(v =>
            Math.round(v).toString(16).padStart(2,'0')).join('');
    };

    // Animations toggle (FIXED)
    window.setAnimations = (val) => {
        const t = val === 'no' ? 'none' : 'all 0.22s cubic-bezier(0.4,0,0.2,1)';
        document.documentElement.style.setProperty('--transition', t);
        localStorage.setItem('elite_anim', val);
    };

    // ── Load saved settings on startup ──
    const savedAccent = localStorage.getItem('elite_accent');
    if (savedAccent) window.setAccent(savedAccent);

    const savedAnim = localStorage.getItem('elite_anim');
    if (savedAnim) {
        const sel = document.getElementById('settingAnim');
        if (sel) sel.value = savedAnim;
        window.setAnimations(savedAnim);
    }

    // ── Elite File Upload Handlers ──
    const initFileUploads = () => {
        const wrappers = document.querySelectorAll('.file-upload-wrapper');
        wrappers.forEach(wrapper => {
            const input = wrapper.querySelector('input[type="file"]');
            const fileNameDisplay = wrapper.querySelector('.file-selected-name');
            
            if(!input) return;

            // Handle selection change
            input.addEventListener('change', (e) => {
                if(input.files && input.files.length > 0) {
                    const name = input.files.length > 1 
                        ? `${input.files.length} files selected` 
                        : input.files[0].name;
                    if(fileNameDisplay) {
                        fileNameDisplay.textContent = name;
                        fileNameDisplay.style.display = 'inline-block';
                    }
                    wrapper.style.borderColor = 'var(--primary)';
                }
            });

            // Drag and Drop visual feedback
            wrapper.addEventListener('dragover', () => wrapper.classList.add('dragover'));
            wrapper.addEventListener('dragleave', () => wrapper.classList.remove('dragover'));
            wrapper.addEventListener('drop', () => wrapper.classList.remove('dragover'));
        });
    };

    // Re-init on every tool load
    const observer = new MutationObserver(() => initFileUploads());
    observer.observe(contentArea, { childList: true });

    // ── Init ──
    initTheme();
    renderCategoryNav();
    initFileUploads();

    const hash = window.location.hash.replace('#', '');
    if (hash && getToolById(hash)) {
        renderTool(hash);
        const cat = toolCategories.find(c => {
            if (c.isSuite) return c.sections.some(s => s.tools.some(t => t.id === hash));
            return c.tools.some(t => t.id === hash);
        });
        if (cat) setActiveTab(cat.id);
    } else {
        renderDashboard();
        setActiveTab(null);
    }
});
