
const containCookie = document.querySelector(".container-cookie");
const btnAceptar = document.querySelector("#btn-aceptar");
const btnRechazar= document.querySelector("#btn-rechazar");

if(document.cookie == '') {
    containCookie.classList.add("show-container");
}

document.addEventListener("click", (e) => {
    if(e.target == btnAceptar){
        let dateNow = Date(Date.now());
        document.cookie = `${"Tiempo"}=${dateNow.toString()}; expires=Thu, 12 Aug 2049 20:47:11 UTC`;
        containCookie.classList.remove("show-container");
    }

    if(e.target == btnRechazar){
        containCookie.classList.remove("show-container");
    }
});