const email = document.querySelector('.email');
const password = document.querySelector('.password');
const user = document.querySelector('.user');
const messageError = document.querySelector('.error');
const messagecorrecto = document.querySelector('.correcto');
let errors = [];
let datosUsuarios  = JSON.parse(localStorage.getItem("usuarios")) || [];
let datos = {};

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const regexUser = /^[a-z0-9_.]+$/;

document.addEventListener("submit", (e) => {

    e.preventDefault();

    messageError.classList.add("py-3");

    if(email.value == '' || password.value == '' || user.value == ''){
        messageError.textContent = "Tienes que rellenar todos los campos";
    }else{
        if(!regexEmail.test(email.value)) {
            errors.push("email");
        }

        if(!regexPass.test(password.value)) {
            errors.push("contraseña");
        }
    
        if(!regexUser.test(user.value)) {
            errors.push("usuario");
        }
    }

    if(errors.length >= 1){
        messageError.textContent = `Los campos ${errors.join(', ')} no cumplen los requisitos`;
    }

    if(errors.length == 0 && messageError.textContent != "Tienes que rellenar todos los campos"){
        messageError.textContent = '';
        messageError.classList.remove("py-3");

        messagecorrecto.textContent = "Registrado correctamente";
        messagecorrecto.classList.add("py-3");
    }

    errors = [];

    cerrarWindow();
});

function cerrarWindow(){
    if(messageError.textContent == ''){
        setTimeout(()=>{
            window.close();
        },800);
    }

    datos = {
        "usuario": user.value,
        "contrasenia": password.value,
        "email": email.value,
    };

    datosUsuarios.push(datos);

    localStorage.setItem("usuarios", JSON.stringify(datosUsuarios));
}