"use strict";

const producto = {
	nombre: "Monitor 20 cm",
	precio: "$ 1.500",
	disponible: true
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// Saber si está frizado o no.
console.log( Object.isFrozen(producto) );
