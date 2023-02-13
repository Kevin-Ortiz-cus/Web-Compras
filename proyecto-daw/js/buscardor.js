const buscar = document.querySelector(".buscar");
const btnEnviar = document.querySelector(".enviar");
const imgEscuchar = document.querySelector(".escuchar");
let palabra = '';
let transPalabra = '';

function ejecutarSpeechAPI() {
    //crear el objeto Speech Recognition
    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // comienza el reconocimiento
    recognition.start();

    // Detecta cuando empieza a hablar(start) y muestra Escuchando...
    recognition.onstart = function () {
        imgEscuchar.classList.add("parpadear");
    };
    // Detecta cuando deja de hablar (speechend) y para el reconocimiento(stop())  
    recognition.onspeechend = function () {
        imgEscuchar.classList.remove("parpadear");
        recognition.stop();
    };

    //Se ejecuta cuando obtiene los resultados del reconocimiento
    recognition.onresult = function (e) {
        let transcript = e.results[0][0].transcript;
        let confidence = e.results[0][0].confidence;

        if (parseInt(confidence * 100) <= 50) {
            alert(`no es fiable`);
        }
        else {
            sessionStorage.setItem("palabraBuscar", transformPalabra(transcript));
            location.href = "./comprar.html";
        }
    };
}

function preguntar() {
    Notification.requestPermission()
        .then(resultado => {
            console.log('El resultado es ', resultado);
        }
        )
}


function mostrarNotificacion() {
    if (Notification.permission == 'granted') {
        const notificacion = new Notification('Te notificamos...', {
            body: "Producto no encontrado",
        });
    }
}

function buscador(buscar) {
    setTimeout(() => {
        try {
            window.scrollBy(0, document.evaluate(`//h3[text()[contains(.,'${buscar}')]]`, document.body).iterateNext().getBoundingClientRect().top);
        } catch {
            preguntar();
            mostrarNotificacion();
        }
    }, 100)
}

function transformPalabra(pa) {
    transPalabra = pa.charAt(0).toUpperCase() + pa.slice(1).toLowerCase();

    return transPalabra;
}

document.addEventListener("submit", (e) => {
    e.preventDefault();

    sessionStorage.setItem("palabraBuscar", transformPalabra(buscar.value));
    location.href = "./comprar.html";
});

document.addEventListener("click", (e) => {
    if(e.target == imgEscuchar){
        ejecutarSpeechAPI();
    }
});

if (sessionStorage.getItem("palabraBuscar") != null) {
    document.addEventListener("DOMContentLoaded", (e) => {
        buscador(sessionStorage.getItem("palabraBuscar"));
        sessionStorage.removeItem("palabraBuscar");
    });
}


