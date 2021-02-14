"use strict";
// Objet literal
const producto = {
	nombre: "Monitor 20 cm",
	precio: "$ 1.500",
	disponible: true,
	mostrarInfo: function() {
		console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}.`);
	}
}

// Objet Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 28'", 43000);
console.log(producto2);
const producto3 = new Producto("Camioneta Chota", 3000);
console.log(producto3);