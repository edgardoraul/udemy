// Funciones IIFE: función anónima autoejecutable
let consola = document.getElementById("app");

function log(parametro)
{
    console.log(parametro);
    consola.innerHTML += `${parametro}<br/>`;
}
/*
const ciudades = ["Anisacate", "La Cumbrecita", "San Rafaela", "La Dormida"];
const ordenes = new Set([345, 947, 105, 535]);
const datos = new Map();

datos.set("Nombre", "Edgard_Roul");
datos.set("Profesión", "Front-End");

for( let entrada of ciudades )
{
    // log(entrada);
}

for( let entrada of ordenes )
{
    // log(entrada);
}

for( let entrada of datos )
{
    // log(entrada);
}

const enlaces = document.getElementsByTagName("a");

for(let enlace of enlaces)
{
    // log(enlace.title);
}
*/

/* const nombre = prompt();
log(`Bienvenido ${nombre}`) */

/* let altura,
    anchura;

altura = window.innerHeight;
anchura = window.innerWidth;
log(`Alto: ${altura}`);
log(`Ancho: ${anchura}`);
window.addEventListener("resize", function(){
    log(`Alto: ${altura}`);
    log(`Ancho: ${anchura}`);
})
 */
/* let desubicacion;
desubicacion = window.navigator.language;

log(desubicacion); */
var a = "a";
let b = "b";
const c = "c";

function funcionScope()
{
    var a = "A";
    let b = "B";
    const c = "C";
    log(`FUNCION: ${a}, ${b}, ${c}`);
}
funcionScope();
if(true)
{
    var a = "AA";
    let b = "BB";
    const c = "CC";
    log(`BLOQUE: ${a}, ${b}, ${c}`);
}

log(`GLOBALES: ${a}, ${b}, ${c}`);