function validar() {
    const tipoValidacion = document.getElementById("tipoValidacion").value;
    const entrada = document.getElementById("entrada").value;
    let mensaje = "";

    // Expresiones regulares para validar direcciones IPv4, URLs y correos electrónicos.
    const regexIPv4 = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
    const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    switch (tipoValidacion) {
        case "ipv4":
            if (regexIPv4.test(entrada)) {
                mensaje = "Dirección IPv4 válida.";
            } else {
                mensaje = "Dirección IPv4 inválida.";
            }
            break;
        case "url":
            if (regexURL.test(entrada)) {
                mensaje = "URL válida.";
            } else {
                mensaje = "URL inválida.";
            }
            break;
        case "email":
            if (regexEmail.test(entrada)) {
                mensaje = "Dirección de correo electrónico válida.";
            } else {
                mensaje = "Dirección de correo electrónico inválida.";
            }
            break;
        default:
            mensaje = "Selecciona un tipo de validación válido.";
    }

    console.log(mensaje);
}
