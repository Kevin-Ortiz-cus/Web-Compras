const nuevaVentana = document.querySelector(".ventana-nueva");

document.addEventListener("click", (e) => {
    if(e.target == nuevaVentana){
        window.open("./registro.html", "", "width=400", "height=600");
    }
});