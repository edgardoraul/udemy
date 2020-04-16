/*
Funciones IIFE: función anónima autoejecutable
*/
let consola = document.getElementById("header");
function log(parametro) {
    console.log(parametro);
    consola.innerHTML += `${parametro}<br/>`;
}
/* =================================== */
/*
const enlace = document.createElement("a");
enlace.className = "enlace";
enlace.id = "nuevo-id";
enlace.setAttribute("href", "//webmoderna.com.ar");
enlace.textContent = "WebModerna";
document.querySelector("#secundaria").appendChild(enlace);
log(enlace);

// Reemplazar elementos
const nuevoEncabezado = document.createElement("h2");
nuevoEncabezado.id = "encabezado";
nuevoEncabezado.appendChild(document.createTextNode("Carreras viejas Cursos"));
log(nuevoEncabezado);

// Elemento anterior reemplazado
const anterior = document.querySelector("#encabezado");
const elPadre = document.querySelector("#lista-cursos");
elPadre.replaceChild(nuevoEncabezado, anterior);
log(anterior.parentElement);

const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.querySelector("#principal");

navegacion.removeChild(enlaces[0])
navegacion.removeChild(enlaces[1])
navegacion.removeChild(enlaces[2])
log(navegacion)

const primerL = document.querySelector(".enlace");
let elemento;
// Obtener una clase
elemento = primerL.className;
elemento = primerL.classList.add("nueva-clase");
elemento = primerL.classList;
elemento = primerL.classList.remove("enlace");
elemento = primerL.classList;

// Leer atributos
elemento = primerL.getAttribute("href");
primerL.setAttribute("href", "https://webmoderna.com.ar");
primerL.setAttribute("target", "_blank");
primerL.setAttribute("data-id", 20);
elemento = primerL.hasAttribute("data-id");
log(elemento);

// Escuchador de eventos
document.querySelector("#submit-buscador").addEventListener("click", ejecutarBoton);
function ejecutarBoton(e)
{
    e.preventDefault();

    let elemento = e;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;
    log(elemento);
}
*/

/* const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const boton = document.querySelector("#logo");
encabezado.addEventListener("mousemove", obtenerEvento);

// Click
// boton.addEventListener("click", obtenerEvento);
// boton.addEventListener("mouseenter", obtenerEvento);
// boton.addEventListener("mouseover", obtenerEvento);
// boton.addEventListener("mouseleave", obtenerEvento);
// boton.addEventListener("mouseout", obtenerEvento);
// boton.addEventListener("mousedown", obtenerEvento);
// boton.addEventListener("mouseup", obtenerEvento);
const busqueda = document.querySelector("#buscador");
// busqueda.addEventListener("keydown", obtenerEvento);
// busqueda.addEventListener("cut", obtenerEvento);
// busqueda.addEventListener("copy", obtenerEvento);
// busqueda.addEventListener("input", obtenerEvento);
// busqueda.addEventListener("change", obtenerEvento);
function obtenerEvento(e)
{
    log(`Evento: ${e.type}`);
}*/

/* // Bubbling
const card = document.querySelector(".card");
const infoCurso = document.querySelector(".info-card");
const agregarCarrito = document.querySelector(".agregar-carrito");
card.addEventListener("click", function(e)
{
    log("Click en Card");
    e.stopPropagation();
})
infoCurso.addEventListener("click", function(e)
{
    log("Click en Info Curso");
    e.stopPropagation();
})
agregarCarrito.addEventListener("click", function(e)
{
    log("Click en Agregar CArrito");
    e.stopPropagation();
}) */

/* 
// Delegation
document.body.addEventListener("click", eliminarElemento);
function eliminarElemento(e)
{
    e.preventDefault();
    if(e.target.classList.contains("borrar-curso"))
    {
        log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains("agregar-carrito"))
    {
        log("Curso agregado");
    }
} */

/* // LocalStorage
localStorage.setItem("Nombre", "Edgard_Roul");
sessionStorage.setItem("Apellido", "Me lo Olvidé");
// Con removeItem se elimina la clave del localStorage.
const nombresuelo = localStorage.getItem("Nombre");
log(nombresuelo);
// Para limpiarlo totalmente:
localStorage.clear(); */

