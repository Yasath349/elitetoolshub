const toolCategories = [
    {
        id: 'smart-ai',
        name: 'Smart AI Tools',
        icon: 'fa-robot',
        tools: [
            { id: 'ai-homework', name: 'AI Homework Solver', desc: 'Solve and understand questions instantly.', icon: 'fa-graduation-cap' },
            { id: 'ai-resume', name: 'AI Resume Builder', desc: 'Create professional resumes for jobs.', icon: 'fa-file-invoice' },
            { id: 'ai-summary', name: 'AI Summary Gen', desc: 'Turn long text into short summaries.', icon: 'fa-compress' },
            { id: 'ai-seo', name: 'AI SEO Keywords', desc: 'Find powerful keywords for SEO.', icon: 'fa-magnifying-glass-chart' },
            { id: 'ai-travel', name: 'AI Travel Planner', desc: 'Create smart travel plans and budgets.', icon: 'fa-plane' }
        ]
    },
    {
        id: 'pdf-suite',
        name: 'PDF Pro Suite',
        icon: 'fa-file-pdf',
        isSuite: true,
        sections: [
            {
                name: 'Convert PDF',
                tools: [
                    { id: 'pdf-to-word', name: 'PDF to Word', icon: 'fa-file-word', desc: 'Convert PDF to editable Word.' },
                    { id: 'word-to-pdf', name: 'Word to PDF', icon: 'fa-file-pdf', desc: 'Convert Word to PDF.' },
                    { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: 'fa-file-image', desc: 'Export pages as JPG.' },
                    { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: 'fa-image', desc: 'Images to PDF.' },
                    { id: 'pdf-to-txt', name: 'PDF to Text', icon: 'fa-file-lines', desc: 'Extract plain text.' },
                    { id: 'html-to-pdf', name: 'HTML to PDF', icon: 'fa-code', desc: 'Webpage to PDF.' }
                ]
            },
            {
                name: 'Edit & Organize',
                tools: [
                    { id: 'pdf-merge', name: 'PDF Merger', icon: 'fa-layer-group', desc: 'Combine multiple PDFs.' },
                    { id: 'pdf-splitter', name: 'PDF Splitter', icon: 'fa-scissors', desc: 'Split into single pages.' },
                    { id: 'pdf-compressor', name: 'PDF Compressor', icon: 'fa-compress', desc: 'Reduce file size.' },
                    { id: 'pdf-rotator', name: 'PDF Rotator', icon: 'fa-rotate', desc: 'Rotate pages.' },
                    { id: 'pdf-page-remove', name: 'Remove Pages', icon: 'fa-trash-can', desc: 'Delete specific pages.' },
                    { id: 'pdf-watermark', name: 'Add Watermark', icon: 'fa-stamp', desc: 'Protect with text.' }
                ]
            },
            {
                name: 'Secure & Sign',
                tools: [
                    { id: 'pdf-lock', name: 'Lock PDF', icon: 'fa-lock', desc: 'Add password protection.' },
                    { id: 'pdf-unlock', name: 'Unlock PDF', icon: 'fa-lock-open', desc: 'Remove passwords.' },
                    { id: 'pdf-sign', name: 'PDF Signature', icon: 'fa-signature', desc: 'Sign documents.' }
                ]
            },
            {
                name: 'Smart AI Tools',
                tools: [
                    { id: 'pdf-ai-summary', name: 'AI Summarizer', icon: 'fa-robot', desc: 'Generate summaries.' },
                    { id: 'pdf-qa', name: 'PDF Q&A Chat', icon: 'fa-comment-dots', desc: 'Ask PDF questions.' },
                    { id: 'pdf-ocr', name: 'OCR Reader', icon: 'fa-eye', desc: 'Extract scanned text.' }
                ]
            }
        ]
    },
    {
        id: 'calculation',
        name: 'Calculation',
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
        id: 'image',
        name: 'Image Tools',
        icon: 'fa-image',
        tools: [
            { id: 'img-compress', name: 'Image Compressor', icon: 'fa-file-zipper', desc: 'Reduce file size instantly.' },
            { id: 'img-resize', name: 'Image Resizer', icon: 'fa-expand', desc: 'Change dimensions easily.' },
            { id: 'img-crop', name: 'Image Cropper', icon: 'fa-crop', desc: 'Cut images to any size.' },
            { id: 'bg-remove', name: 'BG Remover (AI)', icon: 'fa-eraser', desc: 'AI-powered background removal.' },
            { id: 'img-conv', name: 'Image Converter', icon: 'fa-repeat', desc: 'PNG, JPG, WebP & more.' }
        ]
    },
    {
        id: 'social',
        name: 'Social Media',
        icon: 'fa-share-nodes',
        tools: [
            { id: 'hashtag-gen', name: 'Hashtag Generator', icon: 'fa-hashtag', desc: 'Viral tags for IG & TikTok.' },
            { id: 'yt-title-gen', name: 'YouTube Title Gen', icon: 'fa-youtube', desc: 'Click-worthy video titles.' },
            { id: 'insta-caption', name: 'Insta Caption Gen', icon: 'fa-instagram', desc: 'Creative post captions.' },
            { id: 'fb-post-gen', name: 'FB Post Creator', icon: 'fa-facebook', desc: 'Engaging status updates.' },
            { id: 'tweet-gen', name: 'Tweet Generator', icon: 'fa-twitter', desc: 'Viral-style thread starters.' }
        ]
    },
    {
        id: 'developer',
        name: 'Developer Tools',
        icon: 'fa-code',
        tools: [
            { id: 'json-formatter', name: 'JSON Formatter', icon: 'fa-indent', desc: 'Beautify & validate JSON.' },
            { id: 'live-editor', name: 'Live Code Editor', icon: 'fa-laptop-code', desc: 'HTML/CSS/JS preview.' },
            { id: 'color-picker', name: 'Color Picker', icon: 'fa-eye-dropper', desc: 'Hex, RGB, HSL codes.' },
            { id: 'code-minify', name: 'Code Minifier', icon: 'fa-compress', desc: 'Shrink JS & CSS files.' },
            { id: 'regex-tester', name: 'Regex Tester', icon: 'fa-check-double', desc: 'Validate patterns.' }
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
        id: 'ai',
        name: 'AI Writing',
        icon: 'fa-wand-magic-sparkles',
        tools: [
            { id: 'email-writer', name: 'AI Email Writer', icon: 'fa-envelope', desc: 'Professional emails instantly.' },
            { id: 'blog-idea', name: 'Blog Idea Gen', icon: 'fa-lightbulb', desc: 'Viral article topics.' },
            { id: 'ad-copy', name: 'Ad Copy Gen', icon: 'fa-bullhorn', desc: 'High-converting ad text.' },
            { id: 'product-desc', name: 'Product Descriptions', icon: 'fa-cart-shopping', desc: 'Engaging e-com text.' },
            { id: 'story-starter', name: 'Story Starter', icon: 'fa-book', desc: 'Creative writing prompts.' }
        ]
    },
    {
        id: 'seo',
        name: 'SEO Tools',
        icon: 'fa-magnifying-glass-chart',
        tools: [
            { id: 'meta-gen', name: 'Meta Tag Gen', icon: 'fa-tags', desc: 'Optimize for Google.' },
            { id: 'og-gen', name: 'OpenGraph Gen', icon: 'fa-share-nodes', desc: 'Social preview meta.' },
            { id: 'robots-gen', name: 'Robots.txt Gen', icon: 'fa-robot', desc: 'Control search bots.' },
            { id: 'sitemap-gen', name: 'Sitemap Gen', icon: 'fa-sitemap', desc: 'XML sitemap creator.' },
            { id: 'keyword-dens', name: 'Keyword Density', icon: 'fa-chart-pie', desc: 'Analyze text keywords.' }
        ]
    },
    {
        id: 'daily',
        name: 'Daily Life',
        icon: 'fa-calendar-day',
        tools: [
            { id: 'qr-gen', name: 'QR Code Generator', icon: 'fa-qrcode', desc: 'Custom QRs with logos.' },
            { id: 'unit-conv', name: 'Unit Converter', icon: 'fa-scale-balanced', desc: 'Metric to imperial.' },
            { id: 'age-calc', name: 'Age Calculator', icon: 'fa-cake-candles', desc: 'Find exact age in seconds.' },
            { id: 'stopwatch', name: 'Stopwatch', icon: 'fa-stopwatch', desc: 'Precise time tracking.' },
            { id: 'notes-app', name: 'Quick Notes', icon: 'fa-note-sticky', desc: 'Simple local storage notes.' }
        ]
    }
];

// Flat list for search and routing
const allTools = toolCategories.flatMap(cat => {
    if (cat.isSuite) {
        return cat.sections.flatMap(s => s.tools);
    }
    return cat.tools;
});

const getToolById = (id) => allTools.find(tool => tool.id === id);
