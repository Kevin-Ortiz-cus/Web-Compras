const containLogin = document.querySelector('.contain-login');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
let datosUsuarios  = JSON.parse(localStorage.getItem("usuarios")) || [];
let correo = sessionStorage.getItem("email");
let pass = sessionStorage.getItem("contrasenia");

console.log(datosUsuarios);
const containUsuario = document.querySelector(".usuario-datos");
const datosUsuario = document.querySelector(".usuario");
const datosCorreo = document.querySelector(".correo");
const datosContrasenia = document.querySelector(".contrasenia");

const actualizarCorreo = document.querySelector(".actCorreo");
const actualizarContrasenia = document.querySelector(".actContrasenia");

if(sessionStorage.getItem("usuario") == null){
    containLogin.classList.add("show-contain");
}

function cargarDatos(email, password){
    datosUsuarios.forEach(usuario => {
        if(usuario["email"] == email.value && usuario["contrasenia"]){
            sessionStorage.setItem("email", email.value);
            sessionStorage.setItem("contrasenia", password.value);
            sessionStorage.setItem("usuario", usuario["usuario"]);
            location.href = "./comprar.html";
        }
    });
}

function actualizarDatos() {
    datosUsuarios.forEach(dUsu => {
        if(dUsu["usuario"] == sessionStorage.getItem("usuario")){
            dUsu["email"] = correo;
            dUsu["contrasenia"] = pass;
        }
    });
    
    localStorage.setItem("usuarios", JSON.stringify(datosUsuarios));
    
    sessionStorage.setItem("email", actualizarCorreo.value);
    sessionStorage.setItem("contrasenia", actualizarContrasenia.value);
}

if(sessionStorage.getItem("usuario") != null){

    containUsuario.classList.add("show-contain");

    datosUsuario.textContent += sessionStorage.getItem("usuario");
    datosCorreo.textContent += correo;
    datosContrasenia.textContent += pass;

    actualizarCorreo.value = correo;
    actualizarContrasenia.value = pass;
}

containLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    cargarDatos(email, password);
});

containUsuario.addEventListener("submit", actualizarDatos);