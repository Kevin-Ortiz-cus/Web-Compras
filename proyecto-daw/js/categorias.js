
const carrito = document.querySelector(".carrito");
const containerCart = document.querySelector(".container-cart");
const catalogo = document.querySelector(".catalogo");
const messageCarrito = document.querySelector(".text-carrito");
const compraSonido = document.querySelector(".sonidoCompra");
const anyadirSonido = document.querySelector(".sonidoAnyadir");
const notify = document.querySelector(".notify");
let dataUnitPrice = [];
let clonLibros = [];
let libros = [];


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
    libros.forEach(libro => {
        const divContain = document.createElement("div");
        divContain.classList.add("contain-slide", "rounded");

        const img = document.createElement("img");
        img.src = libro.img;

        const divText = document.createElement("div");
        divText.classList.add("capa");

        const h3 = document.createElement("h3");
        h3.classList.add("mx-3");
        h3.textContent = libro.titulo;
        const pAutor = document.createElement("p");
        pAutor.textContent = 'Autor: ' + libro.autor;
        const pCategoria = document.createElement("p");
        pCategoria.textContent = 'Categoria: ' + libro.categoria;
        const pPrecio = document.createElement("p");
        pPrecio.textContent = 'Precio: ' + libro.precio + '€';
        const pUnidades = document.createElement("p");
        pUnidades.textContent = 'Unidades: ' + libro.unidades;

        const btnAnyadir = document.createElement("button");
        btnAnyadir.classList.add("anyadir", "btn", "fw-bold", "btn-warning");
        btnAnyadir.setAttribute("data-id", libro.id);
        btnAnyadir.textContent = 'Añadir al carrito';

        divText.appendChild(h3);
        divText.appendChild(pAutor);
        divText.appendChild(pCategoria);
        divText.appendChild(pPrecio);
        divText.appendChild(pUnidades);
        divText.appendChild(btnAnyadir);

        divContain.appendChild(img);
        divContain.appendChild(divText);

        catalogo.appendChild(divContain);
    });


}

function anyadirItemCarrito(event) {
    if (event.target.matches(".anyadir")) {
        const libro = Object.assign({}, libros.find((libro) => libro.id == event.target.getAttribute("data-id")));

        if (clonLibros.some((clonLibro) => clonLibro.id == libro.id) == false) {
            collectUnitPrice(libro.id, libro.precio);

            clonLibros.push(libro);
            loadCarrito(clonLibros);

            const total = document.createElement("h3");
            total.classList.add("total");
            total.textContent = "Total: " + totalPrice() + " €";

            const comprar = document.createElement("button");
            comprar.classList.add("comprar", "btn", "btn-warning", "fw-bold", "text-uppercase", "h-3");

            comprar.textContent = "Comprar ahora";

            carrito.appendChild(total);
            carrito.appendChild(comprar);
        }
    }
}

function totalPrice() {
    let value = 0;
    const totalPriceItems = dataUnitPrice.reduce(
        (accumulador, unitItem) => accumulador + unitItem.precio * unitItem.unidades,
        value);

    return totalPriceItems;
}

function loadCarrito(clonLibros) {
    resetCarrito();
    clonLibros.forEach((clonLibro) => {

        reducePriceUnit = dataUnitPrice.find((unitPrice) => unitPrice.id == clonLibro.id);

        const titulo = document.createElement("h3");
        titulo.classList.add("titulo");
        titulo.textContent = "Titulo: " + clonLibro.titulo;

        const precio = document.createElement("p");
        precio.classList.add("precio", "my-1");
        precio.textContent = "Precio: " + clonLibro.precio + " €";

        const unidades = document.createElement("p");
        unidades.classList.add("unidades", "my-1");
        unidades.textContent = reducePriceUnit.unidades;

        const subTotal = document.createElement("p");
        subTotal.classList.add("subTotal", "my-1");
        subTotal.textContent = reducePriceUnit.unidades * reducePriceUnit.precio;

        const moreItems = document.createElement("button");
        moreItems.classList.add("more", "btn", "btn-primary", "me-2");
        moreItems.setAttribute("data-id", clonLibro.id);
        moreItems.textContent = "+";

        const lessItems = document.createElement("button");
        lessItems.classList.add("less", "btn", "btn-primary");
        lessItems.setAttribute("data-id", clonLibro.id);
        lessItems.textContent = "-";

        const contenedor = document.createElement("div");
        contenedor.classList.add("item", "mb-4", "border-warning", "border-bottom", "pb-3");
        contenedor.appendChild(titulo);
        contenedor.appendChild(precio);
        contenedor.appendChild(unidades);
        contenedor.appendChild(subTotal);
        contenedor.appendChild(moreItems);
        contenedor.appendChild(lessItems);

        carrito.appendChild(contenedor);
    });
}

function collectUnitPrice(id, price) {
    const unitPrice = {
        id: id,
        unidades: 1,
        precio: price,
    };

    dataUnitPrice.push(unitPrice);
}

function calculateItems(event) {
    if (event.target.matches(".more")) {
        const subTotal = event.target.previousSibling;
        const unidades = event.target.previousSibling.previousSibling;
        const dataClon = clonLibros.find((clon) => clon.id == event.target.getAttribute("data-id"));
        dataUnitPrice.find((data) => {
            if (event.target.getAttribute("data-id") == data.id && data.unidades < dataClon.unidades) {
                subTotal.textContent = Number(subTotal.textContent) + data.precio;
                ++data.unidades;
                unidades.textContent = Number(unidades.textContent) + 1;
            }
        });
    }

    if (event.target.matches(".less")) {
        const subTotal = event.target.previousSibling.previousSibling;
        const unidades = event.target.previousSibling.previousSibling.previousSibling;
        dataUnitPrice.find((data) => {
            if (event.target.getAttribute("data-id") == data.id && data.unidades > 1) {
                subTotal.textContent = Number(subTotal.textContent) - data.precio;
                --data.unidades;
                unidades.textContent = Number(unidades.textContent) - 1;
            }
        });
    }

    if (event.target.matches(".less") || event.target.matches(".more")) {
        const totalPr = document.querySelector(".total");
        totalPr.textContent = "Total: " + totalPrice() + " €";
    }
}

function resetCarrito() {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", cargar);

document.addEventListener("click", (e) => {

    anyadirItemCarrito(e);
    calculateItems(e);
    if (e.target.matches(".miCarrito")) {
        carrito.classList.add("cart-is-active");
        containerCart.classList.add("cart--show");
    }

    if (e.target.matches(".close")) {
        containerCart.classList.remove("cart--show");
    }

    if(e.target.matches(".comprar")){
        if(sessionStorage.getItem("usuario") == null){
            location.href = "./login.html";
        }

        compraSonido.play();
        librosComprados();
        resetCarrito();
        dataUnitPrice = [];
        clonLibros = []; 

        const span = document.createElement("span");
        span.classList.add("h1");
        span.textContent = "Carrito vacio";

        carrito.appendChild(span);

        notify.classList.remove("anyadirNotify");
    }

    if(e.target.matches(".anyadir")){
        notify.classList.add("anyadirNotify");
        anyadirSonido.play();
    }

});


function librosComprados() {
    const titulo = document.querySelectorAll(".titulo");
    const total = document.querySelector(".total");
    console.log(total);
    const nombresLibros = JSON.parse(sessionStorage.getItem("libros")) || [];

    for(let i=0; i < titulo.length; i++){
        nombresLibros.push(titulo[i].textContent);
    }

    sessionStorage.setItem("libros", JSON.stringify(nombresLibros))
    sessionStorage.setItem("Precio total", total.textContent)
}