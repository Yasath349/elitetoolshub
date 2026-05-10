const toolCategories = [
    {
        id: 'calculation',
        name: 'Calculation Engine',
        icon: 'fa-calculator',
        tools: [
            { id: 'basic-calc', name: 'Basic Calculator', icon: 'fa-equals', desc: 'Advanced math engine.' },
            { id: 'percentage-calc', name: 'Percentage Calculator', icon: 'fa-percent', desc: 'Calculate discounts & margins.' },
            { id: 'emi-calc', name: 'Loan / EMI Calculator', icon: 'fa-building-columns', desc: 'Real amortization schedules.' },
            { id: 'bmi-calc', name: 'BMI Calculator', icon: 'fa-weight-scale', desc: 'Health index calculations.' },
            { id: 'discount-calc', name: 'Discount Calculator', icon: 'fa-tags', desc: 'Find final prices easily.' },
            { id: 'currency-conv', name: 'Currency Converter', icon: 'fa-money-bill-transfer', desc: 'Live exchange rates.' }
        ]
    },
    {
        id: 'text',
        name: 'Text Processing',
        icon: 'fa-font',
        tools: [
            { id: 'word-counter', name: 'Word & Char Counter', icon: 'fa-keyboard', desc: 'Live text parsing stats.' },
            { id: 'case-converter', name: 'Case Converter', icon: 'fa-text-height', desc: 'UPPER, lower, Title case.' },
            { id: 'tts', name: 'Text to Speech', icon: 'fa-volume-high', desc: 'Listen to your text.' },
            { id: 'stt', name: 'Speech to Text', icon: 'fa-microphone', desc: 'Voice dictation engine.' },
            { id: 'remove-spaces', name: 'Remove Extra Spaces', icon: 'fa-compress', desc: 'Clean messy formatting.' }
        ]
    },
    {
        id: 'file',
        name: 'File Processing',
        icon: 'fa-file-lines',
        tools: [
            { id: 'image-compress', name: 'Image Compressor', icon: 'fa-file-image', desc: 'Reduce file sizes locally.' },
            { id: 'image-resize', name: 'Image Resizer', icon: 'fa-expand', desc: 'Scale images perfectly.' },
            { id: 'image-convert', name: 'Format Converter', icon: 'fa-images', desc: 'Convert WebP/JPG/PNG.' },
            { id: 'qr-generator', name: 'QR Generator', icon: 'fa-qrcode', desc: 'Generate high-res QRs.' },
            { id: 'pdf-merge', name: 'PDF Merger', icon: 'fa-file-pdf', desc: 'Combine multiple PDFs safely.' }
        ]
    },
    {
        id: 'security',
        name: 'Security & Web',
        icon: 'fa-shield-halved',
        tools: [
            { id: 'password-gen', name: 'Password Generator', icon: 'fa-key', desc: 'Crypto-safe passwords.' },
            { id: 'password-check', name: 'Strength Checker', icon: 'fa-lock', desc: 'Analyze password entropy.' },
            { id: 'ip-checker', name: 'IP Checker', icon: 'fa-network-wired', desc: 'Find your public IP details.' },
            { id: 'base64', name: 'Base64 Encoder', icon: 'fa-code', desc: 'Encode/Decode text safely.' },
            { id: 'hash-gen', name: 'Hash Generator', icon: 'fa-hashtag', desc: 'Generate SHA-256 hashes.' }
        ]
    },
    {
        id: 'social',
        name: 'Social Media',
        icon: 'fa-hashtag',
        tools: [
            { id: 'hashtag-gen', name: 'Hashtag Generator', icon: 'fa-hashtag', desc: 'Generate tags for posts.' },
            { id: 'yt-title-gen', name: 'YT Title Generator', icon: 'fa-youtube', desc: 'Catchy video titles.' }
        ]
    },
    {
        id: 'dev',
        name: 'Developer Tools',
        icon: 'fa-terminal',
        tools: [
            { id: 'json-formatter', name: 'JSON Formatter', icon: 'fa-file-code', desc: 'Parse & pretty print JSON.' },
            { id: 'live-editor', name: 'Live Web Editor', icon: 'fa-code', desc: 'HTML/CSS/JS Sandbox.' },
            { id: 'color-picker', name: 'Color Picker', icon: 'fa-palette', desc: 'HEX to RGB converter.' },
            { id: 'code-minify', name: 'Code Minifier', icon: 'fa-compress', desc: 'Minify JS/CSS/HTML.' }
        ]
    },
    {
        id: 'daily',
        name: 'Daily Life',
        icon: 'fa-clock',
        tools: [
            { id: 'stopwatch', name: 'Stopwatch', icon: 'fa-stopwatch', desc: 'Precision timer.' },
            { id: 'countdown', name: 'Countdown Timer', icon: 'fa-hourglass-half', desc: 'Set timed alarms.' },
            { id: 'todo-list', name: 'To-Do List', icon: 'fa-list-check', desc: 'Local storage task manager.' },
            { id: 'notes-app', name: 'Notes App', icon: 'fa-note-sticky', desc: 'Quick browser notepad.' },
            { id: 'random-gen', name: 'Random Generator', icon: 'fa-dice', desc: 'Numbers & names picker.' }
        ]
    },
    {
        id: 'smart',
        name: 'Smart Utilities',
        icon: 'fa-microchip',
        tools: [
            { id: 'screen-res', name: 'Screen Resolution', icon: 'fa-desktop', desc: 'Check display metrics.' },
            { id: 'speed-test', name: 'Speed Estimator', icon: 'fa-gauge-high', desc: 'Estimate internet speed.' },
            { id: 'battery-health', name: 'Battery Checker', icon: 'fa-battery-half', desc: 'Browser battery API tool.' },
            { id: 'device-info', name: 'Device Info Viewer', icon: 'fa-mobile-screen', desc: 'RAM, CPU, browser details.' },
            { id: 'uptime-calc', name: 'Uptime Calculator', icon: 'fa-server', desc: 'Calculate SLA downtime.' }
        ]
    },
    {
        id: 'prod',
        name: 'Productivity',
        icon: 'fa-chart-line',
        tools: [
            { id: 'habit-tracker', name: 'Habit Tracker', icon: 'fa-calendar-check', desc: 'Simple daily check system.' },
            { id: 'pomodoro', name: 'Pomodoro Timer', icon: 'fa-stopwatch-20', desc: 'Study focus timer.' },
            { id: 'meeting-planner', name: 'Meeting Planner', icon: 'fa-users', desc: 'Timer & Agenda Planner.' },
            { id: 'daily-planner', name: 'Daily Planner', icon: 'fa-calendar-day', desc: 'Generate daily schedules.' },
            { id: 'goal-tracker', name: 'Goal Tracker', icon: 'fa-bullseye', desc: 'Track progress milestones.' }
        ]
    },
    {
        id: 'biz',
        name: 'Business',
        icon: 'fa-briefcase',
        tools: [
            { id: 'invoice-gen', name: 'Invoice Generator', icon: 'fa-file-invoice-dollar', desc: 'Create & export PDFs.' },
            { id: 'salary-calc', name: 'Salary Breakdown', icon: 'fa-money-check-dollar', desc: 'Gross/net calculator.' },
            { id: 'tax-est', name: 'Tax Estimator', icon: 'fa-scale-balanced', desc: 'Estimate tax brackets.' },
            { id: 'markup-calc', name: 'Price Markup', icon: 'fa-arrow-trend-up', desc: 'Calculate retail markup.' },
            { id: 'breakeven-calc', name: 'Break-even Calc', icon: 'fa-chart-pie', desc: 'Analyze profitability.' }
        ]
    },
    {
        id: 'seo',
        name: 'Web / SEO',
        icon: 'fa-magnifying-glass-chart',
        tools: [
            { id: 'meta-gen', name: 'Meta Tag Generator', icon: 'fa-code', desc: 'Generate SEO tags.' },
            { id: 'og-preview', name: 'Open Graph Preview', icon: 'fa-share-nodes', desc: 'Preview social sharing.' },
            { id: 'robots-gen', name: 'Robots.txt Gen', icon: 'fa-robot', desc: 'Generate crawler rules.' },
            { id: 'sitemap-gen', name: 'Sitemap Gen', icon: 'fa-sitemap', desc: 'Generate basic XML.' },
            { id: 'domain-age', name: 'Domain Age Checker', icon: 'fa-globe', desc: 'Check domain registration.' }
        ]
    },
    {
        id: 'ai',
        name: 'AI-Style Tools',
        icon: 'fa-brain',
        tools: [
            { id: 'email-writer', name: 'Email Writer', icon: 'fa-envelope-open-text', desc: 'AI email composer.' },
            { id: 'blog-idea', name: 'Blog Idea Gen', icon: 'fa-lightbulb', desc: 'AI topic generator.' },
            { id: 'ad-copy', name: 'Ad Copy Gen', icon: 'fa-bullhorn', desc: 'Generate marketing copy.' },
            { id: 'product-desc', name: 'Product Desc Gen', icon: 'fa-box-open', desc: 'E-commerce descriptions.' },
            { id: 'story-starter', name: 'Story Starter', icon: 'fa-book-open', desc: 'Creative prompt generator.' }
        ]
    },
    {
        id: 'design',
        name: 'Design & Creative',
        icon: 'fa-wand-magic-sparkles',
        tools: [
            { id: 'font-pair', name: 'Font Pairing', icon: 'fa-font', desc: 'Find matching fonts.' },
            { id: 'gradient-gen', name: 'Gradient Gen', icon: 'fa-fill-drip', desc: 'CSS gradient maker.' },
            { id: 'color-extract', name: 'Color Extractor', icon: 'fa-eye-dropper', desc: 'Extract palette from images.' },
            { id: 'logo-gen', name: 'Logo Shape Gen', icon: 'fa-shapes', desc: 'Basic SVG logo maker.' },
            { id: 'thumbnail-creator', name: 'Thumbnail Layout', icon: 'fa-image', desc: 'YouTube thumbnail planner.' }
        ]
    },
    {
        id: 'mobile',
        name: 'Mobile-Friendly',
        icon: 'fa-mobile',
        tools: [
            { id: 'flashlight', name: 'Flashlight', icon: 'fa-sun', desc: 'Screen light tool.' },
            { id: 'vibration', name: 'Vibration Tester', icon: 'fa-wave-square', desc: 'Mobile vibration API.' },
            { id: 'qr-scanner', name: 'QR Scanner', icon: 'fa-camera', desc: 'Camera-based scanner.' },
            { id: 'ringtone-cutter', name: 'Ringtone Cutter', icon: 'fa-scissors', desc: 'Audio trim simulation.' },
            { id: 'call-duration', name: 'Call Duration', icon: 'fa-phone', desc: 'Calculate call costs.' }
        ]
    },
    {
        id: 'viral',
        name: 'Viral Traffic',
        icon: 'fa-fire',
        tools: [
            { id: 'age-predictor', name: 'Future Age', icon: 'fa-hourglass-end', desc: 'Fun age calculator.' },
            { id: 'love-calc', name: 'Love Calculator', icon: 'fa-heart', desc: 'Fun compatibility checker.' },
            { id: 'name-meaning', name: 'Name Meaning', icon: 'fa-address-card', desc: 'Discover name origins.' },
            { id: 'lucky-number', name: 'Lucky Number', icon: 'fa-clover', desc: 'Personalized lucky numbers.' },
            { id: 'dream-interp', name: 'Dream Interpreter', icon: 'fa-cloud-moon', desc: 'Analyze dream themes.' }
        ]
    }
];

const allTools = toolCategories.flatMap(cat => cat.tools);
const getToolById = (id) => allTools.find(tool => tool.id === id);
