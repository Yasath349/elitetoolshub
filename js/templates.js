window.EliteTemplates = {
    // === CALCULATORS ===
    'basic-calc': `
        <div class="result-box" style="margin-top:0; margin-bottom:20px; text-align:right;">
            <div id="bcHistory" style="color:var(--text-secondary); height:20px; font-size:0.9rem;"></div>
            <div id="bcDisplay" class="result-value" style="margin:5px 0;">0</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
            <button class="btn-secondary" onclick="document.getElementById('bcDisplay').innerText='0';document.getElementById('bcHistory').innerText=''">C</button>
            <button class="btn-secondary" id="bcDel">DEL</button>
            <button class="btn-secondary bc-op" data-op="/">/</button>
            <button class="btn-secondary bc-op" data-op="*">x</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">7</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">8</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">9</button>
            <button class="btn-secondary bc-op" data-op="-">-</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">4</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">5</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">6</button>
            <button class="btn-secondary bc-op" data-op="+">+</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">1</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">2</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">3</button>
            <button class="btn-primary" id="bcEq" style="grid-row:span 2; height:100%;">=</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary); grid-column:span 2">0</button>
            <button class="btn-primary bc-num" style="background:var(--bg-card-hover);color:var(--text-primary)">.</button>
        </div>
    `,
    'percentage-calc': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>What is <input type="number" id="pcP1" class="form-control" style="width:80px;display:inline;"> % of <input type="number" id="pcV1" class="form-control" style="width:120px;display:inline;">?</label><button class="btn-primary" id="pcBtn1" style="margin-top:10px;">Calculate</button></div>
                <hr style="border-color:var(--border-color);margin:20px 0;">
                <div class="form-group"><label><input type="number" id="pcV2" class="form-control" style="width:100px;display:inline;"> is what % of <input type="number" id="pcV3" class="form-control" style="width:100px;display:inline;">?</label><button class="btn-primary" id="pcBtn2" style="margin-top:10px;">Calculate</button></div>
            </div>
            <div class="result-box">
                <p>Result</p>
                <div class="result-value" id="pcResult">-</div>
            </div>
        </div>
    `,
    'emi-calc': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Loan Amount ($)</label><input type="number" id="emiAmount" class="form-control" value="100000"></div>
                <div class="form-group"><label>Interest Rate (% p.a.)</label><input type="number" id="emiRate" class="form-control" value="7.5" step="0.1"></div>
                <div class="form-group"><label>Loan Tenure (Years)</label><input type="number" id="emiTenure" class="form-control" value="10"></div>
                <button id="emiBtn" class="btn-primary">Calculate</button>
            </div>
            <div class="result-box">
                <p>Monthly EMI</p><div class="result-value" id="emiResult">$0.00</div>
                <div style="text-align: left; margin-top: 20px; font-size:0.9rem; color: var(--text-secondary);">
                    <p>Total Interest: <span id="emiTotalInterest" style="color:var(--text-primary);font-weight:600;">$0.00</span></p>
                    <p>Total Payment: <span id="emiTotalAmount" style="color:var(--text-primary);font-weight:600;">$0.00</span></p>
                </div>
            </div>
        </div>
    `,
    'bmi-calc': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Weight (kg)</label><input type="number" id="bmiW" class="form-control" value="70"></div>
                <div class="form-group"><label>Height (cm)</label><input type="number" id="bmiH" class="form-control" value="175"></div>
                <button id="bmiBtn" class="btn-primary">Calculate BMI</button>
            </div>
            <div class="result-box">
                <p>Your BMI</p><div class="result-value" id="bmiResult">-</div>
                <p id="bmiStatus" style="font-weight:bold;"></p>
            </div>
        </div>
    `,
    'discount-calc': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Original Price</label><input type="number" id="dcPrice" class="form-control" value="100"></div>
                <div class="form-group"><label>Discount %</label><input type="number" id="dcDisc" class="form-control" value="20"></div>
                <button id="dcBtn" class="btn-primary">Calculate</button>
            </div>
            <div class="result-box">
                <p>Final Price</p><div class="result-value" id="dcFinal">-</div>
                <p>You Save: <span id="dcSave" style="color:var(--success);font-weight:bold;">$0.00</span></p>
            </div>
        </div>
    `,
    'currency-conv': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Amount</label><input type="number" id="ccAmount" class="form-control" value="1"></div>
                <div class="form-group"><label>From</label><select id="ccFrom" class="form-control"><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option><option value="INR">INR</option></select></div>
                <div class="form-group"><label>To</label><select id="ccTo" class="form-control"><option value="EUR">EUR</option><option value="USD">USD</option><option value="GBP">GBP</option><option value="INR">INR</option></select></div>
                <button id="ccBtn" class="btn-primary">Convert</button>
            </div>
            <div class="result-box">
                <p>Converted Amount</p><div class="result-value" id="ccResult">-</div>
                <p style="font-size:0.8rem;color:var(--text-secondary)">*Using mock/static rates for demo</p>
            </div>
        </div>
    `,

    // === TEXT PROCESSING ===
    'word-counter': `
        <textarea id="wcText" class="form-control" placeholder="Type here..."></textarea>
        <div class="grid-2" style="margin-top:20px;">
            <div class="result-box"><p>Words</p><div class="result-value" id="wcWords">0</div></div>
            <div class="result-box"><p>Characters</p><div class="result-value" id="wcChars">0</div></div>
        </div>
    `,
    'case-converter': `
        <textarea id="caseText" class="form-control" placeholder="Enter text..."></textarea>
        <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap;">
            <button class="btn-secondary" id="cUpper">UPPERCASE</button>
            <button class="btn-secondary" id="cLower">lowercase</button>
            <button class="btn-secondary" id="cTitle">Title Case</button>
            <button class="btn-secondary" id="cCamel">camelCase</button>
        </div>
    `,
    'tts': `
        <textarea id="ttsText" class="form-control" placeholder="Enter text to read..."></textarea>
        <div class="form-group" style="margin-top:15px;"><label>Voice</label><select id="ttsVoice" class="form-control"></select></div>
        <button id="ttsPlay" class="btn-primary" style="margin-top:15px;"><i class="fa-solid fa-play"></i> Play</button>
    `,
    'stt': `
        <div class="result-box" style="margin-top:0;margin-bottom:20px;">
            <div id="sttResult" style="min-height:100px;text-align:left;">Click Start and begin speaking...</div>
        </div>
        <button id="sttStart" class="btn-primary"><i class="fa-solid fa-microphone"></i> Start Dictation</button>
        <button id="sttStop" class="btn-secondary" style="display:none;"><i class="fa-solid fa-stop"></i> Stop</button>
    `,
    'remove-spaces': `
        <textarea id="rsText" class="form-control" placeholder="Enter messy text here..."></textarea>
        <button id="rsBtn" class="btn-primary" style="margin-top:15px;">Clean Text</button>
    `,

    // === FILE PROCESSING ===
    'image-compress': `
        <div class="form-group">
            <label>Upload Image (JPG/PNG)</label>
            <input type="file" id="icFile" class="form-control" accept="image/*">
        </div>
        <div class="form-group"><label>Quality (0.1 - 1.0)</label><input type="range" id="icQuality" min="0.1" max="1" step="0.1" value="0.7" class="form-control"></div>
        <button id="icBtn" class="btn-primary">Compress</button>
        <div id="icPreview" style="margin-top:20px;text-align:center;"></div>
    `,
    'image-resize': `
        <div class="form-group"><input type="file" id="irFile" class="form-control" accept="image/*"></div>
        <div class="grid-2">
            <div class="form-group"><label>Width (px)</label><input type="number" id="irW" class="form-control"></div>
            <div class="form-group"><label>Height (px)</label><input type="number" id="irH" class="form-control"></div>
        </div>
        <button id="irBtn" class="btn-primary">Resize</button>
        <div id="irPreview" style="margin-top:20px;text-align:center;"></div>
    `,
    'image-convert': `
        <div class="form-group"><input type="file" id="ifFile" class="form-control" accept="image/*"></div>
        <div class="form-group"><label>Convert To</label><select id="ifFormat" class="form-control"><option value="image/webp">WEBP</option><option value="image/jpeg">JPEG</option><option value="image/png">PNG</option></select></div>
        <button id="ifBtn" class="btn-primary">Convert</button>
        <div id="ifPreview" style="margin-top:20px;text-align:center;"></div>
    `,
    'qr-generator': `
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Text or URL</label><input type="text" id="qrText" class="form-control" placeholder="https://example.com"></div>
                <button id="qrBtn" class="btn-primary">Generate</button>
            </div>
            <div class="result-box" style="display:flex;justify-content:center;align-items:center;flex-direction:column;">
                <div id="qrCode"></div>
            </div>
        </div>
    `,
    'pdf-merge': `
        <div class="form-group"><label>Select multiple PDFs</label><input type="file" id="pmFiles" class="form-control" accept=".pdf" multiple></div>
        <button id="pmBtn" class="btn-primary">Merge PDFs</button>
        <div id="pmStatus" style="margin-top:15px;text-align:center;"></div>
    `,

    // === SECURITY & WEB ===
    'password-gen': `
        <div class="result-box" style="margin-top:0; margin-bottom: 24px; position:relative;">
            <div class="result-value" id="pgResult" style="font-size: 1.8rem; word-break: break-all;">Click Generate</div>
        </div>
        <div class="grid-2">
            <div>
                <div class="form-group"><label>Length (<span id="pgLenVal">16</span>)</label><input type="range" id="pgLength" class="form-control" min="8" max="64" value="16"></div>
            </div>
            <div>
                <div class="form-group" style="display:flex; flex-direction:column; gap:12px;">
                    <label><input type="checkbox" id="pgUpper" checked> Uppercase</label>
                    <label><input type="checkbox" id="pgLower" checked> Lowercase</label>
                    <label><input type="checkbox" id="pgNum" checked> Numbers</label>
                    <label><input type="checkbox" id="pgSym" checked> Symbols</label>
                </div>
            </div>
        </div>
        <button id="pgBtn" class="btn-primary" style="margin-top:24px;">Generate</button>
    `,
    'password-check': `
        <div class="form-group"><label>Enter Password</label><input type="text" id="pcInput" class="form-control"></div>
        <div class="result-box">
            <p>Strength</p><div class="result-value" id="pcResult">-</div>
            <div style="height:10px; background:var(--bg-app); border-radius:5px; margin-top:10px; overflow:hidden;">
                <div id="pcBar" style="height:100%; width:0%; transition:width 0.3s; background:var(--danger);"></div>
            </div>
        </div>
    `,
    'ip-checker': `
        <button id="ipBtn" class="btn-primary">Check My IP</button>
        <div class="result-box" style="margin-top:20px;">
            <p>Your Public IP</p><div class="result-value" id="ipResult">-</div>
        </div>
    `,
    'base64': `
        <textarea id="b64Input" class="form-control" placeholder="Enter text or Base64..."></textarea>
        <div style="display:flex;gap:10px;margin-top:15px;">
            <button id="b64Enc" class="btn-primary">Encode</button>
            <button id="b64Dec" class="btn-secondary">Decode</button>
        </div>
        <textarea id="b64Output" class="form-control" style="margin-top:15px;" readonly></textarea>
    `,
    'hash-gen': `
        <textarea id="hgInput" class="form-control" placeholder="Enter text to hash..."></textarea>
        <button id="hgBtn" class="btn-primary" style="margin-top:15px;">Generate SHA-256</button>
        <div class="result-box" style="margin-top:15px;">
            <div class="result-value" id="hgResult" style="font-size:1.2rem;word-break:break-all;">-</div>
        </div>
    `,

    // === SOCIAL MEDIA ===
    'hashtag-gen': `
        <div class="form-group"><label>Keyword</label><input type="text" id="htInput" class="form-control" placeholder="e.g. travel"></div>
        <button id="htBtn" class="btn-primary">Generate</button>
        <textarea id="htResult" class="form-control" style="margin-top:15px;" readonly></textarea>
    `,
    'yt-title-gen': `
        <div class="form-group"><label>Video Topic</label><input type="text" id="ytInput" class="form-control" placeholder="e.g. productivity"></div>
        <button id="ytBtn" class="btn-primary">Generate Ideas</button>
        <ul id="ytResult" style="margin-top:15px; padding-left:20px; line-height:2;"></ul>
    `,

    // === DEVELOPER TOOLS ===
    'json-formatter': `
        <div class="grid-2">
            <textarea id="jfInput" class="form-control" placeholder="Paste unformatted JSON here..." style="font-family:monospace;"></textarea>
            <textarea id="jfOutput" class="form-control" readonly style="font-family:monospace;background:var(--bg-app);"></textarea>
        </div>
        <button id="jfBtn" class="btn-primary" style="margin-top:15px;">Format JSON</button>
    `,
    'live-editor': `
        <div class="grid-2">
            <textarea id="leHtml" class="form-control" placeholder="HTML..." style="font-family:monospace;height:200px;"><h1>Hello Web</h1></textarea>
            <textarea id="leCss" class="form-control" placeholder="CSS..." style="font-family:monospace;height:200px;">h1 { color: red; }</textarea>
        </div>
        <button id="leBtn" class="btn-primary" style="margin-top:15px;">Run Output</button>
        <div class="result-box" style="margin-top:15px;padding:0;overflow:hidden;background:#fff;border:1px solid var(--border-color);">
            <iframe id="leFrame" style="width:100%;height:300px;border:none;"></iframe>
        </div>
    `,
    'color-picker': `
        <div class="grid-2">
            <div>
                <input type="color" id="cpInput" style="width:100%;height:100px;border:none;border-radius:var(--radius-md);">
            </div>
            <div class="result-box" style="margin-top:0;">
                <p>HEX</p><div id="cpHex" style="font-weight:bold;margin-bottom:10px;">#000000</div>
                <p>RGB</p><div id="cpRgb" style="font-weight:bold;">rgb(0,0,0)</div>
            </div>
        </div>
    `,
    'code-minify': `
        <textarea id="cmInput" class="form-control" placeholder="Paste JS/CSS/HTML..."></textarea>
        <button id="cmBtn" class="btn-primary" style="margin-top:15px;">Basic Minify</button>
        <textarea id="cmOutput" class="form-control" style="margin-top:15px;" readonly></textarea>
    `,

    // === DAILY LIFE ===
    'stopwatch': `
        <div class="result-box" style="margin-top:0;">
            <div class="result-value" id="swDisplay" style="font-size:3rem;font-variant-numeric: tabular-nums;">00:00:00.00</div>
        </div>
        <div style="display:flex;gap:10px;margin-top:15px;justify-content:center;">
            <button id="swStart" class="btn-primary">Start</button>
            <button id="swStop" class="btn-secondary">Stop</button>
            <button id="swReset" class="btn-secondary">Reset</button>
        </div>
    `,
    'countdown': `
        <div class="grid-2">
            <div class="form-group"><label>Seconds</label><input type="number" id="cdSecs" class="form-control" value="60"></div>
            <div style="display:flex;align-items:end;margin-bottom:24px;">
                <button id="cdStart" class="btn-primary">Start Timer</button>
            </div>
        </div>
        <div class="result-box">
            <div class="result-value" id="cdDisplay" style="font-size:3rem;">00:60</div>
        </div>
    `,
    'todo-list': `
        <div style="display:flex;gap:10px;">
            <input type="text" id="tdInput" class="form-control" placeholder="New task...">
            <button id="tdBtn" class="btn-primary" style="width:auto;">Add</button>
        </div>
        <ul id="tdList" style="margin-top:20px; list-style:none; padding:0;"></ul>
    `,
    'notes-app': `
        <textarea id="naText" class="form-control" placeholder="Write anything... (auto-saved)" style="height:300px;"></textarea>
    `,
    'random-gen': `
        <div class="grid-2">
            <div class="form-group"><label>Min</label><input type="number" id="rgMin" class="form-control" value="1"></div>
            <div class="form-group"><label>Max</label><input type="number" id="rgMax" class="form-control" value="100"></div>
        </div>
        <button id="rgBtn" class="btn-primary">Generate</button>
        <div class="result-box"><div class="result-value" id="rgResult">-</div></div>
    `,

    // === SMART UTILITIES ===
    'screen-res': `
        <button id="srBtn" class="btn-primary">Detect Resolution</button>
        <div class="result-box" style="margin-top:20px;">
            <p>Your Screen Resolution is</p>
            <div class="result-value" id="srResult">-</div>
        </div>
    `,
    'speed-test': `
        <button id="stBtn" class="btn-primary">Estimate Connection Speed</button>
        <div class="result-box" style="margin-top:20px;">
            <p>Estimated Speed</p>
            <div class="result-value" id="stResult">-</div>
            <p style="font-size:0.8rem;color:var(--text-secondary)">*Based on browser connection API</p>
        </div>
    `,
    'battery-health': `
        <button id="bhBtn" class="btn-primary">Check Battery Status</button>
        <div class="result-box" style="margin-top:20px;">
            <p>Battery Level</p>
            <div class="result-value" id="bhResult">-</div>
            <p id="bhStatus"></p>
        </div>
    `,
    'device-info': `
        <button id="diBtn" class="btn-primary">Get Device Info</button>
        <ul id="diResult" style="margin-top:20px; list-style:none; line-height:2; text-align:left; background:var(--bg-card); padding:20px; border-radius:var(--radius-md);"></ul>
    `,
    'uptime-calc': `
        <div class="grid-2">
            <div class="form-group"><label>SLA Guarantee (%)</label><input type="number" id="ucSla" class="form-control" value="99.9" step="0.01"></div>
            <button id="ucBtn" class="btn-primary" style="margin-top:24px;">Calculate Downtime</button>
        </div>
        <div id="ucResult" style="margin-top:20px; background:var(--bg-card); padding:20px; border-radius:var(--radius-md);"></div>
    `,

    // === PRODUCTIVITY ===
    'habit-tracker': `
        <div style="display:flex;gap:10px;">
            <input type="text" id="htInput" class="form-control" placeholder="New Habit...">
            <button id="htAddBtn" class="btn-primary" style="width:auto;">Add</button>
        </div>
        <ul id="htList" style="margin-top:20px; list-style:none; padding:0;"></ul>
    `,
    'pomodoro': `
        <div class="result-box" style="margin-top:0;">
            <div class="result-value" id="pomoDisplay" style="font-size:4rem;">25:00</div>
            <p id="pomoStatus">Work Session</p>
        </div>
        <div style="display:flex;gap:10px;margin-top:15px;justify-content:center;">
            <button id="pomoStart" class="btn-primary">Start</button>
            <button id="pomoPause" class="btn-secondary">Pause</button>
            <button id="pomoReset" class="btn-secondary">Reset</button>
        </div>
    `,
    'meeting-planner': `
        <div class="form-group"><label>Meeting Topic</label><input type="text" id="mpTopic" class="form-control"></div>
        <div class="form-group"><label>Duration (minutes)</label><input type="number" id="mpDur" class="form-control" value="30"></div>
        <button id="mpBtn" class="btn-primary">Generate Agenda</button>
        <div id="mpResult" style="margin-top:20px; background:var(--bg-card); padding:20px;"></div>
    `,
    'daily-planner': `
        <div class="form-group"><label>Focus of the Day</label><input type="text" id="dpFocus" class="form-control"></div>
        <button id="dpBtn" class="btn-primary">Generate Schedule</button>
        <div id="dpResult" style="margin-top:20px; background:var(--bg-card); padding:20px;"></div>
    `,
    'goal-tracker': `
        <div class="form-group"><label>Goal</label><input type="text" id="gtGoal" class="form-control" placeholder="e.g. Read 10 books"></div>
        <div class="grid-2">
            <div class="form-group"><label>Target</label><input type="number" id="gtTarget" class="form-control" value="10"></div>
            <div class="form-group"><label>Current</label><input type="number" id="gtCurrent" class="form-control" value="0"></div>
        </div>
        <button id="gtBtn" class="btn-primary">Update Progress</button>
        <div class="result-box" style="margin-top:20px;">
            <div style="height:20px; background:var(--bg-app); border-radius:10px; overflow:hidden;">
                <div id="gtBar" style="height:100%; width:0%; background:var(--primary); transition:width 0.3s;"></div>
            </div>
            <p id="gtStatus" style="margin-top:10px;"></p>
        </div>
    `,

    // === BUSINESS ===
    'invoice-gen': `
        <div class="grid-2">
            <div class="form-group"><label>Client Name</label><input type="text" id="igClient" class="form-control"></div>
            <div class="form-group"><label>Amount ($)</label><input type="number" id="igAmount" class="form-control"></div>
        </div>
        <div class="form-group"><label>Description</label><input type="text" id="igDesc" class="form-control"></div>
        <button id="igBtn" class="btn-primary">Generate Invoice (Preview)</button>
        <div id="igResult" style="margin-top:20px; background:#fff; color:#000; padding:40px; border:1px solid #ccc; display:none;"></div>
    `,
    'salary-calc': `
        <div class="grid-2">
            <div class="form-group"><label>Annual Salary ($)</label><input type="number" id="scSalary" class="form-control" value="60000"></div>
            <div class="form-group"><label>Tax Rate (%)</label><input type="number" id="scTax" class="form-control" value="20"></div>
        </div>
        <button id="scBtn" class="btn-primary">Calculate Breakdown</button>
        <div id="scResult" style="margin-top:20px; background:var(--bg-card); padding:20px;"></div>
    `,
    'tax-est': `
        <div class="form-group"><label>Total Income ($)</label><input type="number" id="teIncome" class="form-control" value="50000"></div>
        <button id="teBtn" class="btn-primary">Estimate Tax (Simplified)</button>
        <div class="result-box" style="margin-top:20px;"><div class="result-value" id="teResult">-</div></div>
    `,
    'markup-calc': `
        <div class="grid-2">
            <div class="form-group"><label>Cost Price ($)</label><input type="number" id="mcCost" class="form-control" value="50"></div>
            <div class="form-group"><label>Markup (%)</label><input type="number" id="mcMarkup" class="form-control" value="40"></div>
        </div>
        <button id="mcBtn" class="btn-primary">Calculate Selling Price</button>
        <div class="result-box" style="margin-top:20px;"><p>Selling Price</p><div class="result-value" id="mcResult">-</div><p id="mcProfit"></p></div>
    `,
    'breakeven-calc': `
        <div class="grid-2">
            <div class="form-group"><label>Fixed Costs ($)</label><input type="number" id="beFixed" class="form-control" value="10000"></div>
            <div class="form-group"><label>Variable Cost per Unit ($)</label><input type="number" id="beVar" class="form-control" value="10"></div>
            <div class="form-group"><label>Price per Unit ($)</label><input type="number" id="bePrice" class="form-control" value="25"></div>
        </div>
        <button id="beBtn" class="btn-primary">Calculate Break-Even</button>
        <div class="result-box" style="margin-top:20px;"><p>Units to Break Even</p><div class="result-value" id="beResult">-</div></div>
    `,

    // === WEB / SEO ===
    'meta-gen': `
        <div class="form-group"><label>Page Title</label><input type="text" id="mgTitle" class="form-control"></div>
        <div class="form-group"><label>Description</label><textarea id="mgDesc" class="form-control"></textarea></div>
        <div class="form-group"><label>Keywords</label><input type="text" id="mgKeys" class="form-control"></div>
        <button id="mgBtn" class="btn-primary">Generate HTML Tags</button>
        <textarea id="mgResult" class="form-control" style="margin-top:20px;" readonly></textarea>
    `,
    'og-preview': `
        <div class="form-group"><label>OG Title</label><input type="text" id="ogTitle" class="form-control" value="My Awesome Site"></div>
        <div class="form-group"><label>OG Description</label><input type="text" id="ogDesc" class="form-control" value="Click here to read more."></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="ogImg" class="form-control" placeholder="https://..."></div>
        <button id="ogBtn" class="btn-primary">Generate Preview</button>
        <div id="ogResult" style="margin-top:20px; border:1px solid var(--border-color); border-radius:8px; overflow:hidden;"></div>
    `,
    'robots-gen': `
        <div class="form-group"><label>Allow all bots?</label><select id="rgAllow" class="form-control"><option value="yes">Yes</option><option value="no">No</option></select></div>
        <div class="form-group"><label>Sitemap URL</label><input type="text" id="rgSitemap" class="form-control" placeholder="https://example.com/sitemap.xml"></div>
        <button id="rgBtn" class="btn-primary">Generate Robots.txt</button>
        <textarea id="rgResult" class="form-control" style="margin-top:20px;" readonly></textarea>
    `,
    'sitemap-gen': `
        <div class="form-group"><label>Website URLs (One per line)</label><textarea id="smInput" class="form-control" style="height:150px;"></textarea></div>
        <button id="smBtn" class="btn-primary">Generate Sitemap XML</button>
        <textarea id="smResult" class="form-control" style="margin-top:20px; height:150px;" readonly></textarea>
    `,
    'domain-age': `
        <div class="form-group"><label>Domain Name</label><input type="text" id="daInput" class="form-control" placeholder="example.com"></div>
        <button id="daBtn" class="btn-primary">Check Domain</button>
        <div class="result-box" style="margin-top:20px;"><div id="daResult">Enter domain to check WHOIS simulation.</div></div>
    `,

    // === AI-STYLE TOOLS ===
    'email-writer': `
        <div class="form-group"><label>Email Subject / Intent</label><input type="text" id="ewIntent" class="form-control" placeholder="e.g. Asking for a day off"></div>
        <div class="form-group"><label>Tone</label><select id="ewTone" class="form-control"><option>Professional</option><option>Casual</option><option>Urgent</option></select></div>
        <button id="ewBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate AI Email</button>
        <textarea id="ewResult" class="form-control" style="margin-top:20px; height:200px;"></textarea>
    `,
    'blog-idea': `
        <div class="form-group"><label>Niche / Topic</label><input type="text" id="biTopic" class="form-control" placeholder="e.g. Fitness"></div>
        <button id="biBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate Blog Ideas</button>
        <ul id="biResult" style="margin-top:20px; padding-left:20px; line-height:2;"></ul>
    `,
    'ad-copy': `
        <div class="form-group"><label>Product Name</label><input type="text" id="acProd" class="form-control"></div>
        <div class="form-group"><label>Key Benefit</label><input type="text" id="acBen" class="form-control"></div>
        <button id="acBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate Ad Copy</button>
        <div id="acResult" style="margin-top:20px; background:var(--bg-card); padding:20px; white-space:pre-wrap;"></div>
    `,
    'product-desc': `
        <div class="form-group"><label>Product Name</label><input type="text" id="pdName" class="form-control"></div>
        <button id="pdBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate Description</button>
        <textarea id="pdResult" class="form-control" style="margin-top:20px; height:150px;"></textarea>
    `,
    'story-starter': `
        <div class="form-group"><label>Genre</label><select id="ssGenre" class="form-control"><option>Sci-Fi</option><option>Fantasy</option><option>Mystery</option><option>Romance</option></select></div>
        <button id="ssBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate Story Prompt</button>
        <div id="ssResult" style="margin-top:20px; font-style:italic; font-size:1.2rem; background:var(--bg-card); padding:20px;"></div>
    `,

    // === DESIGN / CREATIVE ===
    'font-pair': `
        <button id="fpBtn" class="btn-primary">Generate Random Font Pairing</button>
        <div id="fpResult" style="margin-top:20px; background:var(--bg-card); padding:30px; border-radius:var(--radius-md);">
            <h1 id="fpHeading" style="margin-bottom:10px;">Heading Font</h1>
            <p id="fpBody">Body font looks like this. A perfect match creates visual harmony.</p>
            <div id="fpNames" style="margin-top:20px; font-size:0.8rem; color:var(--text-secondary);"></div>
        </div>
    `,
    'gradient-gen': `
        <div class="grid-2">
            <input type="color" id="ggC1" value="#ff0000" class="form-control" style="height:50px;">
            <input type="color" id="ggC2" value="#0000ff" class="form-control" style="height:50px;">
        </div>
        <div id="ggPreview" style="margin-top:20px; height:150px; border-radius:var(--radius-md); background:linear-gradient(to right, #ff0000, #0000ff);"></div>
        <textarea id="ggResult" class="form-control" style="margin-top:20px;" readonly>background: linear-gradient(to right, #ff0000, #0000ff);</textarea>
    `,
    'color-extract': `
        <div class="form-group"><label>Upload Image</label><input type="file" id="ceFile" class="form-control" accept="image/*"></div>
        <canvas id="ceCanvas" style="display:none;"></canvas>
        <div id="ceResult" style="display:flex; gap:10px; margin-top:20px; height:50px;"></div>
        <p style="margin-top:10px;font-size:0.8rem;color:var(--text-secondary)">*Extracts average color across sections</p>
    `,
    'logo-gen': `
        <div class="form-group"><label>Brand Initial</label><input type="text" id="lgText" class="form-control" maxlength="2" value="E"></div>
        <button id="lgBtn" class="btn-primary">Generate Basic Logo</button>
        <div id="lgResult" style="margin-top:20px; text-align:center;"></div>
    `,
    'thumbnail-creator': `
        <div class="form-group"><label>Main Title</label><input type="text" id="tcTitle" class="form-control" value="CRAZY RESULTS!"></div>
        <button id="tcBtn" class="btn-primary">Generate Layout</button>
        <div id="tcResult" style="margin-top:20px; width:100%; aspect-ratio:16/9; background:#000; position:relative; overflow:hidden; border:2px solid var(--border-color);"></div>
    `,

    // === MOBILE FRIENDLY ===
    'flashlight': `
        <div class="result-box" id="flBox" style="height:300px; display:flex; align-items:center; justify-content:center; transition:background 0.3s; background:#000;">
            <button id="flBtn" class="btn-primary" style="border-radius:50%; width:100px; height:100px; font-size:2rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `,
    'vibration': `
        <button id="vibBtn" class="btn-primary" style="height:100px; font-size:1.5rem;"><i class="fa-solid fa-mobile-screen"></i> Test Vibration</button>
        <p style="margin-top:10px; text-align:center;">*Requires a mobile device</p>
    `,
    'qr-scanner': `
        <div class="result-box"><i class="fa-solid fa-camera" style="font-size:3rem;margin-bottom:10px;"></i><p>Camera API Simulation.</p></div>
        <button id="qsBtn" class="btn-primary" style="margin-top:10px;">Start Camera (Mock)</button>
    `,
    'ringtone-cutter': `
        <div class="form-group"><input type="file" class="form-control" accept="audio/*"></div>
        <div class="result-box">Audio Waveform UI (Simulation)</div>
        <button class="btn-primary" style="margin-top:10px;">Trim Audio</button>
    `,
    'call-duration': `
        <div class="grid-2">
            <div class="form-group"><label>Start Time</label><input type="time" id="cdStart" class="form-control"></div>
            <div class="form-group"><label>End Time</label><input type="time" id="cdEnd" class="form-control"></div>
        </div>
        <div class="form-group"><label>Rate per minute ($)</label><input type="number" id="cdRate" class="form-control" value="0.05"></div>
        <button id="cdBtn" class="btn-primary">Calculate Cost</button>
        <div class="result-box" style="margin-top:20px;"><div class="result-value" id="cdResult">-</div></div>
    `,

    // === VIRAL TRAFFIC ===
    'age-predictor': `
        <div class="form-group"><label>Your Birth Year</label><input type="number" id="apYear" class="form-control"></div>
        <button id="apBtn" class="btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Predict the Future</button>
        <div id="apResult" style="margin-top:20px; background:var(--bg-card); padding:20px; font-size:1.2rem; text-align:center;"></div>
    `,
    'love-calc': `
        <div class="grid-2">
            <div class="form-group"><label>Your Name</label><input type="text" id="lcName1" class="form-control"></div>
            <div class="form-group"><label>Crush's Name</label><input type="text" id="lcName2" class="form-control"></div>
        </div>
        <button id="lcBtn" class="btn-primary"><i class="fa-solid fa-heart"></i> Calculate Love %</button>
        <div class="result-box" style="margin-top:20px;"><div class="result-value" id="lcResult" style="font-size:4rem; color:#ef4444;">-</div></div>
    `,
    'name-meaning': `
        <div class="form-group"><label>First Name</label><input type="text" id="nmName" class="form-control"></div>
        <button id="nmBtn" class="btn-primary">Discover Meaning</button>
        <div id="nmResult" style="margin-top:20px; background:var(--bg-card); padding:20px; font-style:italic;"></div>
    `,
    'lucky-number': `
        <div class="form-group"><label>Your Zodiac Sign</label>
            <select id="lnSign" class="form-control">
                <option>Aries</option><option>Taurus</option><option>Gemini</option><option>Cancer</option><option>Leo</option><option>Virgo</option><option>Libra</option><option>Scorpio</option><option>Sagittarius</option><option>Capricorn</option><option>Aquarius</option><option>Pisces</option>
            </select>
        </div>
        <button id="lnBtn" class="btn-primary">Get My Numbers</button>
        <div class="result-box" style="margin-top:20px;"><div class="result-value" id="lnResult" style="letter-spacing:5px;">-</div></div>
    `,
    'dream-interp': `
        <div class="form-group"><label>What did you dream about?</label><input type="text" id="diInput" class="form-control" placeholder="e.g. falling, flying, teeth..."></div>
        <button id="diBtn" class="btn-primary"><i class="fa-solid fa-cloud-moon"></i> Interpret</button>
        <div id="diResult" style="margin-top:20px; background:var(--bg-card); padding:20px;"></div>
    `
};
