document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Definir el correo y la contraseña
    var correo = "dante@unfv.edu.pe";
    var contraseña = "dante123";

    // Obtener los valores ingresados por el usuario
    var correoIngresado = document.getElementById("correo").value;
    var contraseñaIngresada = document.getElementById("contraseña").value;

    // Comparar el correo y la contraseña ingresados con los definidos
    if (correoIngresado === correo && contraseñaIngresada === contraseña) {
        alert("¡Inicio de sesión exitoso!");

        window.location.href = "../portal/docente/cursos/cursos-docente.html"; // Reemplaza "pagina_de_inicio.html" con la URL de tu página de inicio
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});