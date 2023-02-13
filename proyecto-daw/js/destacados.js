const containDestacados = document.querySelector(".destacados");

function cargarJSON(json) {
    let myObj = json;
    cargarFichero(myObj);
}

function cargar() {
    const url = "./json/datos.json";

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(json => cargarJSON(json))
        .catch(e => console.log(e));
}


function cargarFichero(obj) {
    libros = obj["@productos"];
    for(let i=5; i<15; i++){
const divContain = document.createElement("div");
        divContain.classList.add("contain-slide", "rounded");

        const img = document.createElement("img");
        img.src = libros[i].img;

        const divText = document.createElement("div");
        divText.classList.add("capa");

        const h3 = document.createElement("h3");
        h3.classList.add("mx-3");
        h3.textContent = libros[i].titulo;
        const pAutor = document.createElement("p");
        pAutor.textContent = 'Autor: ' + libros[i].autor;
        const pCategoria = document.createElement("p");
        pCategoria.textContent = 'Categoria: ' + libros[i].categoria;
        const pPrecio = document.createElement("p");
        pPrecio.textContent = 'Precio: ' + libros[i].precio + '€';
        const pUnidades = document.createElement("p");
        pUnidades.textContent = 'Unidades: ' + libros[i].unidades;

        divText.appendChild(h3);
        divText.appendChild(pAutor);
        divText.appendChild(pCategoria);
        divText.appendChild(pPrecio);
        divText.appendChild(pUnidades);

        divContain.appendChild(img);
        divContain.appendChild(divText);

        containDestacados.appendChild(divContain);
    }
}

document.addEventListener("DOMContentLoaded", cargar);