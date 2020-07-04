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

// let desubicacion;
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

// Object Literal
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
log(persona);
log(persona2.tipoCliente());
// acetcleanup de wordrpress para ener en cuenta

// livehouse addon de chrome


// Objeto literal
const cliente = {
    nombre : "Juan",
    saldo: 200,
    tipoCliente: function()
    {
        let tipo;
        if(this.saldo > 1000) {
            tipo = "Titanio";
        } else if(this.saldo > 500) {
            tipo = "Cobre";
        } else {
            tipo = "Anormal";
        }
        return tipo;
    }
}
console.log(cliente.tipoCliente());


// Método alternativo
function Cliente(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(edad)
    {
        let tipo;
        if(this.saldo > 19000) {
            tipo = "Forrao'en Guita!";
        } else if (this.saldo > 5000) {
            tipo = "Cheto";
        } else {
            tipo = "Cagado de hambre";
        }
        return tipo;
    }
}

const persona = new Cliente("El Brayan", 20000);
const persona2 = new Cliente("La Yesi", 6000);
const persona3 = new Cliente("El Yónatan", 4000);

log(persona2.nombre + ", es de tipo: ")
log(persona2.tipoCliente());

log(persona.nombre + ", es de tipo: ")
log(persona.tipoCliente());
log(persona3.nombre + ", es de tipo: ")
log(persona3.tipoCliente());


// String
const nombre1 = "Pegro";
const nombre2 = new String("Pegro");
log(typeof nombre1);
log(typeof nombre2);

if(nombre1 === nombre2)
{
    log("Sí, son iguales.");
} else {
    log("Nop! Algo raro.");
}


// Númeritos
const numero1 = 20;
const numero2 = new Number(20);
log(typeof numero1);
log(typeof numero1);
log(typeof numero2);

const buleano1 = true;
const buleano2 = new Boolean(true);
log(typeof buleano1);
log(typeof buleano2);

const funcion1 = function(a,b) {
    return a+b;
}
const funcion2 = new Function('a', 'b', 'return a + b');

// Objetos
const persona1 = {
    nombre: "Edgard"
}
const persona2 = new Object({nombre:'Edgard'});

log(funcion1(2,3));
log(funcion2(5,2));
log(persona1);
log(persona2);

// Arreglos
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);
log(arreglo1);
log(arreglo2);


// Prototipos
function Cliente(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
        let tipo;
        if(this.saldo > 19000) {
            tipo = "Forrao'en Guita!";
        } else if (this.saldo > 5000) {
            tipo = "Cheto";
        } else {
            tipo = "Cagado de hambre";
        }
        return tipo;
}
// Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de $${this.saldo}, Tipo cliente: ${this.tipoCliente()}.`;
}
const cliente1 = new Cliente('Pedro', 1000);

log(cliente1.nombreClienteSaldo());

// HERENCIA
// Banca para empresas.
function Empresa(nombre, saldo, telefono, tipo)
{
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa('Udemy', 142342523532, 2612440817, 'Aburración');
log(empresa.nombreClienteSaldo());
*/

// Object Create
const Cliente = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}.`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

// Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = "Mary";
mary.saldo = 3245;
mary.retirarSaldo(3000);
log(mary.imprimirSaldo());