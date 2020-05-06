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

log(desubicacion); 

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
*/

// Object Literal
/*
const cliente = {
    nombre: "Juan",
    saldo: 501,
    tipoCliente: function()
    {
        let tipo;

        if(this.saldo > 1000)
        {
            tipo = "Forrao'en guita.";
        }
        else if(this.saldo > 500)
        {
            tipo = "Chetazo";
        }
        else
        {
            tipo = "Laucha";
        }
        return tipo;
    }
}
log(cliente.tipo);
*/
// Método alternativo
function Cliente(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(edad)
    {
        let tipo;

        if(this.saldo > 1000)
        {
            tipo = "Forrao'en guita.";
        }
        else if(this.saldo > 500)
        {
            tipo = "Chetazo";
        }
        else
        {
            tipo = "Laucha";
        }

        // Generalmente se utiliza el return cuando se quiere hacer algo con los datos que retorna.
        return tipo;
    }
}
const persona = new Cliente("Pedro", 20000);
const persona2 = new Cliente("Kerancita", 6000);
log(persona2.tipoCliente());