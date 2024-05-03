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


function mostrarInfo(info,tipoinfo) {
    Swal.fire({
        title: info,
        html: "<p>" + tipoinfo + "</p>",
        icon: "info",
        confirmButtonColor: "#941B0C",
        iconColor: "#941B0C",
    });
}; 




document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            // Obtener el contenedor donde se mostrarán las cotizaciones
            const cotizacionesContainer = document.getElementById("cotizaciones");

            // Recorrer los datos de la API y construir el HTML para cada cotización
            data.forEach(cotizacion => {
                const cotizacionHTML = `
                    <div>
                        <h2>${cotizacion.nombre}</h2>
                        <p><strong>Casa:</strong> ${cotizacion.casa}</p>
                        <p><strong>Compra:</strong> ${cotizacion.compra}</p>
                        <p><strong>Venta:</strong> ${cotizacion.venta}</p>
                        <p><strong>Fecha de Actualización:</strong> ${cotizacion.fechaActualizacion}</p>
                    </div>
                `;
                // Agregar el HTML de la cotización al contenedor
                cotizacionesContainer.insertAdjacentHTML('beforeend', cotizacionHTML);
            });
        })
        .catch(error => {
            console.error('Error al obtener las cotizaciones:', error);
        });
});

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


const tableSelector = document.getElementById("table-selector");
const tableContainer = document.getElementById("table-container");

tableSelector.addEventListener("change", () => {
  const selectedTable = tableSelector.value;

  // Hide all tables
  for (let i = 1; i <= 3; i++) {
    const tableId = `table${i}`;
    const table = document.getElementById(tableId);
    table.style.display = "none";
  }

  // Show the selected table
  const selectedTableId = `table${selectedTable}`;
  const selectedTableElement = document.getElementById(selectedTableId);
  selectedTableElement.style })