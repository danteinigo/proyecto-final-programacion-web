let btn = document.querySelector('#btn');
let sidevar = document.querySelector('.sidevar');

// Función para alternar la visibilidad del sidebar
btn.onclick = function () {
    sidevar.classList.toggle('active');
}

// Función para cerrar el sidebar al hacer clic fuera de él
document.addEventListener('click', function (event) {
    let isClickInsideSidebar = sidevar.contains(event.target);
    let isClickInsideButton = btn.contains(event.target);

    if (!isClickInsideSidebar && !isClickInsideButton) {
        sidevar.classList.remove('active');
    }
});

//Función para mostrar curso y sección
document.addEventListener('DOMContentLoaded', function () {
    var cursoSelect = document.getElementById('curso');
    var seccionSelect = document.getElementById('seccion');
    var seleccionDiv = document.getElementById('seleccion');

    function actualizarSeleccion() {
        var cursoSeleccionado = cursoSelect.options[cursoSelect.selectedIndex].text;
        var seccionSeleccionada = seccionSelect.selectedIndex !== -1 ? seccionSelect.options[seccionSelect.selectedIndex].text : '';
        seleccionDiv.textContent = cursoSeleccionado + ' - ' + seccionSeleccionada;
    }

    cursoSelect.addEventListener('change', actualizarSeleccion);
    seccionSelect.addEventListener('change', actualizarSeleccion);

    // Actualizar la selección inicial
    actualizarSeleccion();
});

//Función para mostrar cursos
document.getElementById('curso').addEventListener('change', function () {
    var curso = this.value;
    var seccionSelect = document.getElementById('seccion');

    // Limpiar las opciones actuales
    seccionSelect.innerHTML = '';

    // Mostrar las secciones correspondientes al curso seleccionado
    switch (curso) {
        case 'curso0':
            seccionSelect.add(new Option("", "seccion0"));
            break;
        case 'curso1':
            seccionSelect.add(new Option("I12345", "seccion1"));
            seccionSelect.add(new Option("I54321", "seccion2"));
            seccionSelect.add(new Option("I98765", "seccion3"));
            break;
        case 'curso2':
            seccionSelect.add(new Option("P12345", "seccion1"));
            seccionSelect.add(new Option("P54321", "seccion2"));
            break;
        case 'curso3':
            seccionSelect.add(new Option("D98765", "seccion1"));
            seccionSelect.add(new Option("D24680", "seccion2"));
            break;
        case 'curso4':
            seccionSelect.add(new Option("E12345", "seccion1"));
            seccionSelect.add(new Option("E80246", "seccion2"));
            break;
        case 'curso5':
            seccionSelect.add(new Option("R13579", "seccion1"));
            break;
        case 'curso6':
            seccionSelect.add(new Option("S80246", "seccion1"));
            seccionSelect.add(new Option("S35791", "seccion2"));
            break;
        // Agrega más casos según necesites
        default:
            // Si no se selecciona ningún curso, muestra una opción vacía
            seccionSelect.add(new Option("", ""));
            break;
    }
});

// JavaScript para redireccionar al hacer clic en el botón "REGISTRO DE NOTAS"
document.querySelector('.notas button').addEventListener('click', function () {
    window.location.href = 'notas/registro-notas.html';
});