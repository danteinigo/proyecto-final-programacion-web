let btn = document.querySelector("#btn");
let sidevar = document.querySelector(".sidevar");

// Función para alternar la visibilidad del sidebar
btn.onclick = function () {
    sidevar.classList.toggle("active");
};

// Función para cerrar el sidebar al hacer clic fuera de él
document.addEventListener("click", function (event) {
    let isClickInsideSidebar = sidevar.contains(event.target);
    let isClickInsideButton = btn.contains(event.target);

    if (!isClickInsideSidebar && !isClickInsideButton) {
        sidevar.classList.remove("active");
    }
});
