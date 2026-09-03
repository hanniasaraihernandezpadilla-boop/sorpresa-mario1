// ==========================================
// FECHA DE INICIO DE LA RELACIÓN
// ==========================================

// 05 de abril de 2026
const fechaInicio = new Date(
    "2026-04-05T00:00:00"
);

// ==========================================
// CAMBIAR DE PANTALLA
// ==========================================

function irA(idPantalla) {

    const pantallas =
        document.querySelectorAll(".pantalla");

    pantallas.forEach(function (pantalla) {

        pantalla.classList.remove(
            "pantalla-activa"
        );

    });

    const nuevaPantalla =
        document.getElementById(idPantalla);

    nuevaPantalla.classList.add(
        "pantalla-activa"
    );

}


// ==========================================
// CONTADOR DE LA RELACIÓN
// ==========================================

function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        ahora - fechaInicio;


    if (diferencia < 0) {
        return;
    }


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


    document.getElementById("dias")
        .textContent = dias;

    document.getElementById("horas")
        .textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos")
        .textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos")
        .textContent =
        String(segundos).padStart(2, "0");

}


actualizarContador();

setInterval(
    actualizarContador,
    1000
);


// ==========================================
// CREAR CORAZONES
// ==========================================

function crearCorazon() {

    const contenedor =
        document.getElementById("corazones");

    const corazon =
        document.createElement("div");

    corazon.className =
        "corazon";


    const tipos = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"

    ];


    corazon.textContent =
        tipos[
            Math.floor(
                Math.random() * tipos.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        (15 + Math.random() * 25) + "px";


    const duracion =
        5 + Math.random() * 6;


    corazon.style.animationDuration =
        duracion + "s";


    contenedor.appendChild(
        corazon
    );


    setTimeout(function () {

        corazon.remove();

    }, duracion * 1000);

}


setInterval(
    crearCorazon,
    700
);


// ==========================================
// CREAR ESTRELLAS
// ==========================================

function crearEstrellas() {

    const contenedor =
        document.getElementById(
            "estrellas"
        );


    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const estrella =
            document.createElement(
                "div"
            );


        estrella.className =
            "estrella";


        estrella.style.left =
            Math.random() * 100 + "vw";


        estrella.style.top =
            Math.random() * 100 + "vh";


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        const tamanio =
            1 + Math.random() * 3;


        estrella.style.width =
            tamanio + "px";


        estrella.style.height =
            tamanio + "px";


        contenedor.appendChild(
            estrella
        );

    }

}


crearEstrellas();


// ==========================================
// EFECTO DE CONFETI
// ==========================================

function crearConfeti() {

    const simbolos = [

        "❤️",
        "💕",
        "💖",
        "✨",
        "🎉",
        "🎊",
        "⭐",
        "🎈"

    ];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const elemento =
            document.createElement(
                "div"
            );


        elemento.textContent =
            simbolos[
                Math.floor(
                    Math.random()
                    * simbolos.length
                )
            ];


        elemento.style.position =
            "fixed";


        elemento.style.left =
            Math.random() * 100 + "vw";


        elemento.style.top =
            "-30px";


        elemento.style.fontSize =
            (15 + Math.random() * 25)
            + "px";


        elemento.style.zIndex =
            "200";


        const duracion =
            2 + Math.random() * 3;


        elemento.style.transition =
            `transform ${duracion}s linear,
             opacity ${duracion}s`;


        document.body.appendChild(
            elemento
        );


        setTimeout(function () {

            elemento.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 720}deg)`;


            elemento.style.opacity =
                "0";


        }, 50);


        setTimeout(function () {

            elemento.remove();

        }, duracion * 1000);

    }

}


// ==========================================
// CONFETI CUANDO LLEGA AL FINAL
// ==========================================

document.addEventListener(
    "click",
    function () {

        const pantalla =
            document.getElementById(
                "pantallaCumple"
            );


        if (
            pantalla.classList.contains(
                "pantalla-activa"
            )
        ) {

            crearConfeti();

        }

    }
);