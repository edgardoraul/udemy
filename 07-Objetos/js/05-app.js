"use strict";
const producto = {
	nombre: "Monitor 20 cm",
	precio: 15000,
	disponible: true, 
	informacion: {
		peso: "80 kg",
		medida: "pulgudas"
	},
	fabricacion: {
		pais: "Argentina",
		provincia: "Córdoba"
	}
}

console.log(producto);
console.log(producto.informacion.peso);