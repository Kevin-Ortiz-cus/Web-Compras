# web-compras

### Descripción
Página web de compra de libros.

### Arbol de directorios

│   comprar.html
│   destacados.html
│   geocalizacion.html
│   index.html
│   login.html
│   politica-empresa.html
│   quienes-somos.html
│   registro.html
│
├───css
│       animaciones.css
│       catalogo.css
│       cookie.css
│       quienes-somos.css
│       registro.css
│       slider.css
│       styles.css
│
├───img
│   │   biblioteca-universal.jpeg
│   │   lectura.jpg
│   │   logo.svg
│   │   museo.jpg
│   │   quienes-somos.jpg
│   │   viaje.jpg
│   │
│   ├───bootstrap-icons
│   │       facebook.svg
│   │       instagram.svg
│   │       twitter.svg
│   │
│   ├───gogle-icons
│   │       cart.svg
│   │       email-icon.svg
│   │       img-buscar.svg
│   │       microfono.svg
│   │       password-icon.svg
│   │       username-icon.svg
│   │
│   └───libros
│           book-action.jpg
│           book-action2.jpg
│           book-action3.jpg
│           book-action4.jpg
│           book-action5.jpg
│           book-action6.jpg
│           book-action7.jpg
│           book-adventure.jpg
│           book-adventure2.jpg
│           book-adventure3.jpg
│           book-adventure4.jpg
│           book-adventure5.jpg
│           book-adventure6.jpg
│           book-adventure7.jpg
│           book-fantasy.jpg
│           book-fantasy2.jpg
│           book-fantasy3.jpg
│           book-fantasy4.jpg
│           book-fantasy5.jpg
│           book-fantasy6.jpg
│           book-fantasy7.jpg
│           book-terror.jpg
│           book-terror2.jpg
│           book-terror3.jpg
│           book-terror4.jpg
│           book-terror5.jpg
│           book-terror6.jpg
│           book-terror7.jpg
│
├───js
│       buscardor.js
│       categorias.js
│       cookie.js
│       destacados.js
│       login.js
│       nueva-pestaña.js
│       registrarse.js
│       session.js
│       slider.js
│
├───json
│       datos.json
│
└───sounds
        anyadir.mp3
        comprar.mp3

### Usuarios y expreiones regulares utilizadas
Puedes registrar un nuevo usurio llendo al login y dandole al enlace registrarse

Usuario por defecto: 
- Usuario = kevin
- Contrasña = kevin@123
- Email = kevin@gmail.com

Expresiones regulares:
Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
Contraseñia = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
Usuario = /^[a-z0-9_.]+$/

### Cookies y webstorage
- Cookies: Tiempo
- Session-storage: Email, Usuario, Contrasenia
- Local-storage: Usuarios

### Elementos multimedia
Audios

### Notificaciones
Las notificaciones estan cuando el buscador falla en encontral algun producto del carrito

### ¿Como funciona la pagina?
Para poder comprar en la página web previamente hay que iniciar sesión o en caso el usuario no tenga una cuenta
primero tiene que registrar, una vez iniciada la sesión el usuario podrá comprar libros en la página web,
los libros se añadirán haciendo clic en el botón añadir al carrito, una vez añadidos los libros que el usuario 
quiere comprar el usuario deberá hacer clic al la imagen del carrito ubicada en el enlace comprar libro, 
luego de hacer clic aparecerá un contenedor con los libros añadidos para comprar los productos se tendrá al
botón comprar ahora.

### Instalación
Instalar el proyecto y para el funcionamiento se necesitaria usar live server ya que hay algunos ficheros
de la aplicación utilizan fetch.

### Tecnologías que se utilizaron
Se utilizaron para desarrollar la página web:
- JavaScript
- Css
- Html
- Bootstrap

### Derechos de autor
Pagina web pertenece a Kevin Angel Ortiz Cusirramos, las licencias son Creative commons

