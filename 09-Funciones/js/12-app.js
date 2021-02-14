// Map y forích.
const carrito = [
	{ nombre: "Monitorcito", precio: 500 },
	{ nombre: "Televisión", precio: 100 },
	{ nombre: "Tablet", precio: 200},
	{ nombre: "Audífonos", precio: 300 },
	{ nombre: "Tecladito Huengue", precio: 400 },
	{ nombre: "Celuloide", precio: 123000 }
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - ${producto.precio}.` );

carrito.forEach( producto => console.log( `${producto.nombre} - ${producto.precio}.` ) );

console.log(nuevoArreglo);