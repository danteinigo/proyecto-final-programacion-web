document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Definir los usuarios y contraseñas con sus tipos
    var usuarios = [
        { correo: "dante@unfv.edu.pe", contraseña: "dante123", tipo: "docente" },
        { correo: "maria@unfv.edu.pe", contraseña: "maria456", tipo: "docente" },
        { correo: "juan@unfv.edu.pe", contraseña: "juan789", tipo: "alumno" },
        { correo: "ana@unfv.edu.pe", contraseña: "ana321", tipo: "alumno" }
    ];

    // Obtener los valores ingresados por el usuario
    var correoIngresado = document.getElementById("correo").value;
    var contraseñaIngresada = document.getElementById("contraseña").value;

    // Buscar el usuario correspondiente
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.correo === correoIngresado && usuario.contraseña === contraseñaIngresada;
    });

    if (usuarioEncontrado) {
        alert("¡Inicio de sesión exitoso!");
        if (usuarioEncontrado.tipo === "docente") {
            window.location.href = "../portal/docente/cursos/cursos-docente.html"; // Reemplaza con la URL de tu página de inicio para docentes
        } else if (usuarioEncontrado.tipo === "alumno") {
            window.location.href = "../portal/alumno/dashboard-alumnos.html"; // Reemplaza con la URL de tu página de inicio para alumnos
        }
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
