document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); 
    enviar();
});

function enviar(){
    // Capturar el valor del campo de nombre
    var nombre = document.getElementById("name").value;

    Swal.fire({
        title: "Mensaje enviado!",
        text: nombre+ ", en breve nuestro equipo se contactara",
        icon: "success",
        confirmButtonColor: "#941B0C",
    });
}

function mostrarInfo(info,tipoinfo) {
    Swal.fire({
        title: info,
        html: "<p>" + tipoinfo + "</p>",
        icon: "info",
        confirmButtonColor: "#941B0C",
        iconColor: "#941B0C",
    });
}