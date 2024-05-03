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


  const dropdownButton = document.getElementById('dropdown-button');
  const dropdown = document.querySelector('.dropdown');
  
  dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) &&!dropdownButton.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });


  function showTable() {
    var selector = document.getElementById("table-selector");
    var selectedTableId = selector.options[selector.selectedIndex].value;
    var tables = document.querySelectorAll("#table-container table");
    
    tables.forEach(function(table) {
      if (table.id === selectedTableId) {
        table.style.display = "table";
      } else {
        table.style.display = "none";
      }
    });
  }