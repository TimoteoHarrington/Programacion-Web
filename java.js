/****************** PopUP Contacto */
document.querySelector("#contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto
    enviar();
});

function enviar() {
    var nombre = document.querySelector("#name").value;
    Swal.fire({
        title: "Mensaje enviado!",
        text: nombre + ", en breve nuestro equipo se contactará",
        icon: "success",
        confirmButtonColor: "#941B0C",
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("contactForm").submit(); // Envío del formulario
        }
    });
}




/****************** PopUPs Mas info */

function mostrarInfo(info,tipoinfo) {
    Swal.fire({
        title: info,
        html: "<p>" + tipoinfo + "</p>",
        icon: "info",
        confirmButtonColor: "#941B0C",
        iconColor: "#941B0C",
    });
}; 


/****************** Google Maps */
function iniciarMap(){
    var coord = {lat:-34.5992287 ,lng:-58.3863372 };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord,
    })
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });

};


/****************** Seleccionar tabla en Valores */

function showSelected() {
    var selector = document.getElementById("table-selector");
    var selectedValue = selector.value;

    // Ocultar todos los elementos
    var tables = document.querySelectorAll("#table-container > table, #table-container > .dolar-container");
    tables.forEach(function(table) {
        table.style.display = "none";
    });

    // Mostrar el elemento seleccionado
    var selectedTable = document.getElementById(selectedValue);
    if (selectedTable) {
        selectedTable.style.display = "table"; // Mostrar la tabla
    } else {
        var dolarContainer = document.querySelector("#table-container > .dolar-container");
        dolarContainer.style.display = "block"; // Mostrar el contenedor de dólar
    }
}
