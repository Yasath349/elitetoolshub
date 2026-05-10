window.EliteToolEngines = window.EliteToolEngines || {};

// Helpers for file tools
const processImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => callback(img);
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
};

// ==========================================
// Image Compress
// ==========================================
window.EliteToolEngines['image-compress'] = {
    init: function() {
        const btn = document.getElementById('icBtn');
        if(!btn) return;
        btn.onclick = () => {
            const file = document.getElementById('icFile').files[0];
            const qual = parseFloat(document.getElementById('icQuality').value);
            if(!file) return;
            processImage(file, (img) => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width; canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const outUrl = canvas.toDataURL(file.type || 'image/jpeg', qual);
                document.getElementById('icPreview').innerHTML = `<img src="${outUrl}" style="max-width:100%; max-height:300px;"><br><a href="${outUrl}" download="compressed.jpg" class="btn-primary" style="margin-top:10px;">Download</a>`;
            });
        };
    }
};

// ==========================================
// Image Resize
// ==========================================
window.EliteToolEngines['image-resize'] = {
    init: function() {
        const btn = document.getElementById('irBtn');
        if(!btn) return;
        btn.onclick = () => {
            const file = document.getElementById('irFile').files[0];
            const w = parseInt(document.getElementById('irW').value);
            const h = parseInt(document.getElementById('irH').value);
            if(!file || !w || !h) return;
            processImage(file, (img) => {
                const canvas = document.createElement('canvas');
                canvas.width = w; canvas.height = h;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                const outUrl = canvas.toDataURL(file.type || 'image/jpeg');
                document.getElementById('irPreview').innerHTML = `<img src="${outUrl}" style="max-width:100%; max-height:300px;"><br><a href="${outUrl}" download="resized.jpg" class="btn-primary" style="margin-top:10px;">Download</a>`;
            });
        };
    }
};

// ==========================================
// Image Convert
// ==========================================
window.EliteToolEngines['image-convert'] = {
    init: function() {
        const btn = document.getElementById('ifBtn');
        if(!btn) return;
        btn.onclick = () => {
            const file = document.getElementById('ifFile').files[0];
            const format = document.getElementById('ifFormat').value;
            if(!file) return;
            processImage(file, (img) => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width; canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const outUrl = canvas.toDataURL(format);
                const ext = format.split('/')[1];
                document.getElementById('ifPreview').innerHTML = `<img src="${outUrl}" style="max-width:100%; max-height:300px;"><br><a href="${outUrl}" download="converted.${ext}" class="btn-primary" style="margin-top:10px;">Download</a>`;
            });
        };
    }
};

// ==========================================
// QR Generator
// ==========================================
window.EliteToolEngines['qr-generator'] = {
    init: function() {
        const btn = document.getElementById('qrBtn');
        if(!btn) return;
        btn.onclick = () => {
            const text = document.getElementById('qrText').value;
            const container = document.getElementById('qrCode');
            container.innerHTML = '';
            if(text && window.QRCode) {
                new QRCode(container, {
                    text: text,
                    width: 200,
                    height: 200,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            }
        };
    }
};

// ==========================================
// PDF Merge
// ==========================================
window.EliteToolEngines['pdf-merge'] = {
    init: function() {
        const btn = document.getElementById('pmBtn');
        if(!btn) return;
        btn.onclick = async () => {
            const files = document.getElementById('pmFiles').files;
            const status = document.getElementById('pmStatus');
            if(files.length < 2) {
                status.innerText = "Please select at least 2 PDF files.";
                return;
            }
            if(!window.PDFLib) {
                status.innerText = "PDF Library not loaded.";
                return;
            }
            try {
                status.innerText = "Merging...";
                const mergedPdf = await PDFLib.PDFDocument.create();
                for(let i=0; i<files.length; i++) {
                    const arrayBuffer = await files[i].arrayBuffer();
                    const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
                    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                    copiedPages.forEach((page) => mergedPdf.addPage(page));
                }
                const pdfBytes = await mergedPdf.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                status.innerHTML = `<a href="${url}" download="merged.pdf" class="btn-primary">Download Merged PDF</a>`;
            } catch(e) {
                status.innerText = "Error merging PDFs.";
                console.error(e);
            }
        };
    }
};
