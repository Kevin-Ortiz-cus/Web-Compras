const btnSession = document.querySelector(".session");

if(sessionStorage.getItem("usuario") != null){
    btnSession.textContent = sessionStorage.getItem("usuario");
}