 
// ======================================
// 1. PANTALLA DE BIENVENIDA
// ======================================


// PANTALLA DE BIENVENIDA CORREGIDA

document.addEventListener("DOMContentLoaded", function() {

    const botonEntrar = document.getElementById("entrar-web");
    const bienvenida = document.getElementById("bienvenida");

    if (botonEntrar && bienvenida) {

        botonEntrar.addEventListener("click", function() {

            bienvenida.classList.add("oculta");

            setTimeout(function() {
                bienvenida.style.display = "none";
            }, 1000);

        });

    }

});


// ======================================
// 2. RELOJ DIGITAL
// ======================================

function actualizarReloj() {
    const ahora = new Date();

    document.getElementById("hora").textContent =
        ahora.toLocaleTimeString("es-ES");
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

// ======================================
// 3. BARRA DE PROGRESO
// ======================================

window.addEventListener("scroll", () => {
    const altura = document.documentElement.scrollHeight
        - window.innerHeight;

    const progreso = altura > 0
        ? (window.scrollY / altura) * 100
        : 0;

    document.getElementById("barra-progreso")
        .style.width = progreso + "%";

    // BOTÓN VOLVER ARRIBA

    const boton = document.getElementById("volver-arriba");

    boton.style.display =
        window.scrollY > 300 ? "block" : "none";
});

// ======================================
// 4. VOLVER AL PRINCIPIO
// ======================================

document.getElementById("volver-arriba")
    .addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

// ======================================
// 5. ANIMACIONES AL DESPLAZARSE
// ======================================

const elementos = document.querySelectorAll(
    "h2, h3, img, ul"
);

elementos.forEach(elemento => {
    elemento.classList.add("aparecer-scroll");
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});

// ======================================
// 6. BALÓN INTERACTIVO
// ======================================

const balon = document.getElementById("balon-flotante");

balon.addEventListener("click", () => {
    balon.style.animation = "none";

    balon.animate([
        { transform: "translateY(0) rotate(0deg)" },
        { transform: "translateY(-100px) rotate(360deg)" },
        { transform: "translateY(0) rotate(720deg)" }
    ], {
        duration: 900,
        easing: "ease-out"
    });
});

// ======================================
// 7. CONTADOR DE AÑOS
// ======================================

const numero = document.getElementById("numero-contador");

const anioActual = new Date().getFullYear();
const aniosHistoria = anioActual - 1863;

numero.textContent = aniosHistoria;

/* ======================================
   INTERACTIVIDAD DATOS EXTRA
   ====================================== */

document.addEventListener("DOMContentLoaded", function() {

    // CONFIRMACIÓN AL GUARDAR LA FICHA

    const formulario = document.querySelector("section form");
    const mensaje = document.getElementById("mensaje-ficha");

    if (formulario && mensaje) {

        formulario.addEventListener("submit", function(event) {

            event.preventDefault();

            if (!formulario.reportValidity()) {
                return;
            }

            mensaje.classList.add("mostrar");

            setTimeout(function() {
                mensaje.classList.remove("mostrar");
            }, 3500);

        });

    }

    // ANIMACIÓN DE LAS FILAS DE LA TABLA

    const filas = document.querySelectorAll("tbody tr");

    filas.forEach(function(fila, indice) {
        fila.style.animation = "entrada 0.6s ease both";
        fila.style.animationDelay = (indice * 0.15) + "s";
    });

    // ANIMACIÓN DE LAS ESTADÍSTICAS

    const estadisticas = document.querySelectorAll(".estadistica");

    const observadorExtra = new IntersectionObserver(function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }

        });

    }, { threshold: 0.2 });

    estadisticas.forEach(function(elemento) {
        elemento.classList.add("aparecer-scroll");
        observadorExtra.observe(elemento);
    });

});

// =======================================
// INTERACTIVIDAD DE LA PÁGINA PRINCIPAL
// =======================================

document.addEventListener("DOMContentLoaded", function() {

    // ANIMACIÓN DE LAS TARJETAS

    const tarjetas = document.querySelectorAll(".tarjeta-futbol");

    const observadorPortada = new IntersectionObserver(
        function(entradas) {

            entradas.forEach(function(entrada) {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                }

            });

        },
        { threshold: 0.2 }
    );

    tarjetas.forEach(function(tarjeta, indice) {

        tarjeta.classList.add("aparecer-scroll");
        tarjeta.style.transitionDelay = (indice * 0.15) + "s";

        observadorPortada.observe(tarjeta);

    });

    // EFECTO DE LA PRESENTACIÓN

    const presentacion = document.querySelector(
        ".presentacion-personal"
    );

    if (presentacion) {
        presentacion.classList.add("aparecer-scroll");
        observadorPortada.observe(presentacion);
    }

    // EFECTO EN LA FRASE FINAL

    const frase = document.querySelector(".frase-futbol");

    if (frase) {
        frase.classList.add("aparecer-scroll");
        observadorPortada.observe(frase);
    }

});


