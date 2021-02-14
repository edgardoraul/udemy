"use strict";

const nombre = "Hola";
const precio = 20;

const producto = {
	nombre: "Monitor 20 cm",
	precio: "$ 1.500",
	disponible: true,
	mostrarInfo: function() {
		console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}.`);
	}
}

const producto2 = {
	nombre: "Tabletuda",
	precio: "$ 500",
	disponible: true,
	mostrarInfo: function() {
		console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}.`);
	}
}

producto.mostrarInfo();
producto2.mostrarInfo();