document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.querySelector('#notasTable tbody');
    var data = [
        "García Pérez, María Isabel",
        "Martínez López, Juan Carlos",
        "Hernández Rodríguez, Ana Sofía",
        "López García, Luis Miguel",
        "González Martínez, Andrea Fernanda",
        "Díaz Hernández, Jorge Alejandro",
        "Pérez Sánchez, Laura Valentina",
        "Rodríguez González, Carlos Eduardo",
        "Sánchez Martínez, Sofía Alejandra",
        "Ramírez Hernández, José Luis",
        "Flores Rodríguez, Daniela Fernanda",
        "Torres López, Juan Manuel",
        "Vázquez Ramírez, María José",
        "Gómez Pérez, Ricardo Arturo",
        "Mendoza Sánchez, Karla Patricia",
        "Jiménez González, Andrés Felipe",
        "Ruiz Martínez, Paulina Gabriela",
        "Castillo Díaz, Fernando Alberto",
        "Chávez Vázquez, Ana Karen",
        "Núñez Gómez, Sebastián Alejandro",
        "Delgado Pérez, Andrea Paola",
        "Vargas Rodríguez, José Antonio",
        "Molina Sánchez, Brenda Guadalupe",
        "Ramos Torres, Juan Pablo",
        "Cruz Jiménez, María Fernanda",
        "Ortega Ruiz, Miguel Ángel",
        "Salazar García, Alejandra",
        "Mejía Díaz, Roberto Carlos",
        "Navarro Martínez, Natalia Andrea",
        "Herrera López, Gabriel Alejandro",
        "Acosta Vázquez, Ana Laura",
        "Santos Pérez, Eduardo José",
        "Álvarez García, Valeria",
        "Ríos Hernández, Luis Fernando",
        "Pacheco Sánchez, Ana Sofía",
        "Campos Rodríguez, David Alejandro",
        "Morales Vargas, Andrea Nicole",
        "Guerrero Reyes, Juan José",
        "Fuentes Martínez, Mariana",
        "Rosales López, Francisco Javier"
    ];

    function calcularPromedio(row) {
        var ep = parseInt(row.cells[2].textContent) || 0;
        var ef = parseInt(row.cells[3].textContent) || 0;
        var ta = parseInt(row.cells[4].textContent) || 0;

        if (!isNaN(ep) && !isNaN(ef) && !isNaN(ta) && ep > 0 && ef > 0 && ta > 0) {
            var promedio = (ep * 0.3 + ef * 0.5 + ta * 0.2);
            row.cells[5].textContent = promedio.toFixed(2);
        } else {
            row.cells[5].textContent = ""; // Vaciar la celda de promedio si no todos los campos están completos
        }
    }

    for (var i = 0; i < data.length; i++) {
        var row = tableBody.insertRow();
        row.insertCell().textContent = (i + 1);
        row.insertCell().textContent = data[i];
        row.insertCell().contentEditable = true;
        row.insertCell().contentEditable = true;
        row.insertCell().contentEditable = true;
        row.insertCell().textContent = "";

        row.cells[2].addEventListener('input', function () {
            calcularPromedio(this.parentNode);
        });
        row.cells[3].addEventListener('input', function () {
            calcularPromedio(this.parentNode);
        });
        row.cells[4].addEventListener('input', function () {
            calcularPromedio(this.parentNode);
        });
    }
});

const $btnExportar = document.querySelector("#btnExportar");
const $btnIncidencia = document.querySelector("#btnIncidencia");
const $tabla = document.querySelector("#notasTable");

$btnExportar.addEventListener("click", function () {
    let tableExport = new TableExport($tabla, {
        exportButtons: false,
        filename: "Reporte_de_notas",
        sheetname: "Notas",
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.notasTable.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});

$btnIncidencia.addEventListener("click", function () {
    window.location.href = "incidencia-nota.html"; // Cambia "incidencia-nota.html" por la URL a la que quieres redirigir
});