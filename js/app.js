document.addEventListener('DOMContentLoaded', () => {
    // --- State & DOM Elements ---
    const sidebarNav = document.getElementById('sidebarNav');
    const contentArea = document.getElementById('contentArea');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const searchInput = document.getElementById('toolSearch');

    // --- Theme Management ---
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme ? savedTheme === 'dark' : true; // Default to dark for premium feel
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        } else {
            document.documentElement.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
        }
    };

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark 
            ? '<i class="fa-solid fa-sun"></i> Light Mode' 
            : '<i class="fa-solid fa-moon"></i> Dark Mode';
    });

    // --- Mobile Menu ---
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar on click outside in mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // --- Render Sidebar ---
    const renderSidebar = () => {
        sidebarNav.innerHTML = '';
        
        // Home Button
        const homeItem = document.createElement('a');
        homeItem.href = '#';
        homeItem.className = 'nav-item active';
        homeItem.innerHTML = `<i class="fa-solid fa-house"></i> Dashboard`;
        homeItem.addEventListener('click', (e) => {
            e.preventDefault();
            renderDashboard();
            updateActiveNav(null);
            if(window.innerWidth <= 992) sidebar.classList.remove('open');
        });
        sidebarNav.appendChild(homeItem);

        // Categories
        toolCategories.forEach(category => {
            const catDiv = document.createElement('div');
            catDiv.className = 'nav-category';
            
            const title = document.createElement('h3');
            title.className = 'nav-category-title';
            title.textContent = category.name;
            catDiv.appendChild(title);

            category.tools.forEach(tool => {
                const item = document.createElement('a');
                item.href = `#${tool.id}`;
                item.className = 'nav-item';
                item.dataset.id = tool.id;
                item.innerHTML = `<i class="${tool.icon.includes('youtube') ? 'fa-brands' : 'fa-solid'} ${tool.icon}"></i> ${tool.name}`;
                
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    renderTool(tool.id);
                    updateActiveNav(tool.id);
                    if(window.innerWidth <= 992) sidebar.classList.remove('open');
                });
                
                catDiv.appendChild(item);
            });
            
            sidebarNav.appendChild(catDiv);
        });
    };

    const updateActiveNav = (toolId) => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (toolId) {
            const activeEl = document.querySelector(`.nav-item[data-id="${toolId}"]`);
            if (activeEl) activeEl.classList.add('active');
        } else {
            sidebarNav.querySelector('.nav-item').classList.add('active');
        }
    };

    // --- Search Functionality ---
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        if(term.length === 0) {
            renderDashboard();
            return;
        }

        const filteredTools = allTools.filter(t => 
            t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term)
        );

        contentArea.innerHTML = `
            <div class="section-title">
                <i class="fa-solid fa-search"></i> Search Results for "${e.target.value}"
            </div>
            <div class="tools-grid">
                ${filteredTools.map(tool => `
                    <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                        <div class="tool-icon-wrapper">
                            <i class="${tool.icon.includes('youtube') ? 'fa-brands' : 'fa-solid'} ${tool.icon}"></i>
                        </div>
                        <h3>${tool.name}</h3>
                        <p>${tool.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    });

    // Expose loadTool globally for onclick handlers in HTML strings
    window.loadTool = (id) => {
        renderTool(id);
        updateActiveNav(id);
        searchInput.value = '';
    };

    // --- Render Views ---
    const renderDashboard = () => {
        breadcrumbs.innerHTML = `<span class="active">Dashboard</span>`;
        
        let html = `
            <div class="hero-section">
                <div class="hero-content">
                    <h2>Welcome to Elite Tools Hub</h2>
                    <p>Your pro-level suite of utilities for daily tasks, development, and more. All tools run securely in your browser.</p>
                </div>
                <div class="hero-decor"></div>
            </div>
        `;

        toolCategories.forEach(category => {
            html += `
                <div class="section-title">
                    <i class="${category.icon.includes('youtube') ? 'fa-brands' : 'fa-solid'} ${category.icon}"></i> ${category.name}
                </div>
                <div class="tools-grid">
                    ${category.tools.map(tool => `
                        <div class="tool-card" onclick="window.loadTool('${tool.id}')">
                            <div class="tool-icon-wrapper">
                                <i class="${tool.icon.includes('youtube') ? 'fa-brands' : 'fa-solid'} ${tool.icon}"></i>
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

    const renderTool = (id) => {
        const tool = getToolById(id);
        if (!tool) return;

        const category = toolCategories.find(c => c.tools.some(t => t.id === id));
        
        breadcrumbs.innerHTML = `
            <span style="cursor:pointer" onclick="window.loadTool(null)">Dashboard</span> 
            <i class="fa-solid fa-chevron-right" style="font-size:0.8rem;margin:0 8px"></i> 
            <span>${category.name}</span>
            <i class="fa-solid fa-chevron-right" style="font-size:0.8rem;margin:0 8px"></i> 
            <span class="active">${tool.name}</span>
        `;

        // Load Tool UI
        const uiTemplate = getToolTemplate(id);
        
        contentArea.innerHTML = `
            <div class="tool-view fade-in">
                <div class="tool-header">
                    <h2>${tool.name}</h2>
                    <p>${tool.desc}</p>
                </div>
                <div class="tool-workspace">
                    ${uiTemplate}
                </div>
            </div>
        `;

        // Initialize Tool Logic
        if (window.EliteToolEngines && window.EliteToolEngines[id]) {
            setTimeout(() => {
                window.EliteToolEngines[id].init();
            }, 0);
        } else {
             contentArea.innerHTML += `
                <div class="tool-view" style="margin-top:20px;">
                    <div class="tool-workspace" style="text-align:center; padding: 40px; color: var(--warning);">
                        <i class="fa-solid fa-person-digging" style="font-size:3rem; margin-bottom:16px;"></i>
                        <h3>Under Construction</h3>
                        <p>The logic engine for this tool is currently being developed.</p>
                    </div>
                </div>
             `;
        }
    };

    // Global Templates Registry
    const getToolTemplate = (id) => {
        return window.EliteTemplates[id] || `<p>UI for ${id} will be implemented soon.</p>`;
    };

    // --- Auth Modal & Backend ---
    let currentAuthType = 'signin';
    
    window.openAuthModal = (type) => {
        currentAuthType = type;
        const modal = document.getElementById('authModal');
        const title = document.getElementById('authTitle');
        document.getElementById('authError').style.display = 'none';
        document.getElementById('authEmail').value = '';
        document.getElementById('authPassword').value = '';
        
        title.innerText = type === 'signin' ? 'Sign In to Elite' : 'Create an Account';
        modal.classList.add('active');
    };

    window.closeAuthModal = () => {
        document.getElementById('authModal').classList.remove('active');
    };

    window.submitAuth = async () => {
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;
        const errorEl = document.getElementById('authError');
        const btn = document.getElementById('authSubmitBtn');
        
        if(!email || !password) {
            errorEl.innerText = "Email and password are required.";
            errorEl.style.display = 'block';
            return;
        }

        const endpoint = currentAuthType === 'signin' ? '/api/signin' : '/api/signup';
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        
        try {
            const response = await fetch('http://localhost:5000' + endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            if(!response.ok) {
                errorEl.innerText = data.error || "Authentication failed.";
                errorEl.style.display = 'block';
            } else {
                alert(data.message + "\\n\\nYou are now authenticated as User #" + data.user_id);
                window.closeAuthModal();
                // Update UI to show logged in state
                document.querySelector('.account-menu').innerHTML = `
                    <div class="user-profile" style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:0.9rem; font-weight:bold;">User #${data.user_id}</span>
                        <img src="https://ui-avatars.com/api/?name=User+${data.user_id}&background=3b82f6&color=fff" alt="User" style="width:36px; height:36px; border-radius:50%;">
                    </div>
                `;
            }
        } catch(err) {
            errorEl.innerText = "Error connecting to backend server. Is it running?";
            errorEl.style.display = 'block';
        }
        
        btn.disabled = false;
        btn.innerText = 'Continue';
    };

    // --- Settings & Notifications Modals ---
    window.openSettingsModal = () => document.getElementById('settingsModal').classList.add('active');
    window.closeSettingsModal = () => document.getElementById('settingsModal').classList.remove('active');
    
    window.openNotifModal = () => document.getElementById('notifModal').classList.add('active');
    window.closeNotifModal = () => document.getElementById('notifModal').classList.remove('active');

    // Real Customization Logic
    window.setThemePref = (mode) => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('elite_theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('elite_theme', 'light');
        }
    };

    window.setAccent = (colorHex) => {
        document.documentElement.style.setProperty('--primary', colorHex);
        localStorage.setItem('elite_accent', colorHex);
        // Darken for hover state
        const darken = (hex, amount) => {
            let color = hex.replace('#', '');
            let num = parseInt(color, 16);
            let r = Math.max(0, (num >> 16) - amount);
            let g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
            let b = Math.max(0, (num & 0x0000FF) - amount);
            return `#${(g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
        };
        document.documentElement.style.setProperty('--primary-hover', darken(colorHex, 20));
    };

    window.setAnimations = (val) => {
        if(val === 'no') {
            document.documentElement.style.setProperty('--transition', 'none');
            localStorage.setItem('elite_anim', 'no');
        } else {
            document.documentElement.style.setProperty('--transition', 'all 0.3s ease');
            localStorage.setItem('elite_anim', 'yes');
        }
    };

    // Load saved settings on startup
    const savedAccent = localStorage.getItem('elite_accent');
    if(savedAccent) window.setAccent(savedAccent);
    
    const savedAnim = localStorage.getItem('elite_anim');
    if(savedAnim) {
        const sel = document.getElementById('settingAnim');
        if(sel) sel.value = savedAnim;
        window.setAnimations(savedAnim);
    }

    // --- Init ---
    initTheme();
    renderSidebar();
    
    // Initial Route
    if(window.location.hash) {
        const id = window.location.hash.replace('#', '');
        if(getToolById(id)) {
            renderTool(id);
            updateActiveNav(id);
        } else {
            renderDashboard();
        }
    } else {
        renderDashboard();
    }
});
