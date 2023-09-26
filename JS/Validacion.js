document.addEventListener("DOMContentLoaded", function() {
    const fileUpload = document.getElementById("file-upload");
    const message = document.getElementById("message");
    
    document.getElementById("upload-form").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const fileName = fileUpload.value;
        const allowedExtensions = /(\.jpg|\.png|\.gif)$/i;
        
        if (!allowedExtensions.exec(fileName)) {
            message.textContent = "Error: El archivo seleccionado no es válido. Por favor, selecciona un archivo de imagen (.jpg, .png o .gif).";
            return;
        }
        
        message.textContent = "Archivo válido.";
    });
});
