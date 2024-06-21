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

    var dateRanges = {
        EP: { start: new Date('2024-06-21'), end: new Date('2024-07-01') },
        EF: { start: new Date('2024-08-19'), end: new Date('2024-08-24') },
        TA: { start: new Date('2024-08-19'), end: new Date('2024-08-24') }
    };

    function isDateInRange(date, range) {
        return date >= range.start && date <= range.end;
    }

    function validarFechaEP() {
        var today = new Date();
        return isDateInRange(today, dateRanges.EP);
    }

    function validarFechaEF() {
        var today = new Date();
        return isDateInRange(today, dateRanges.EF);
    }

    function validarFechaTA() {
        var today = new Date();
        return isDateInRange(today, dateRanges.TA);
    }

    function validarRango(value) {
        return value >= 0 && value <= 20;
    }

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

    function validarYCalcular(event, validarFecha) {
        var cell = event.target;
        var value = parseInt(cell.textContent);

        if (!validarFecha()) {
            alert("No se puede ingresar notas fuera del rango de fechas permitido.");
            cell.textContent = "";
        } else if (!validarRango(value)) {
            alert("Las notas deben estar entre 0 y 20.");
            cell.textContent = "";
        } else {
            calcularPromedio(cell.parentNode);
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

        row.cells[2].addEventListener('input', function (event) {
            validarYCalcular(event, validarFechaEP);
        });

        row.cells[3].addEventListener('input', function (event) {
            validarYCalcular(event, validarFechaEF);
        });

        row.cells[4].addEventListener('input', function (event) {
            validarYCalcular(event, validarFechaTA);
        });
    }
});

$btnIncidencia.addEventListener("click", function () {
    window.location.href = "incidencia-nota.html";
});
