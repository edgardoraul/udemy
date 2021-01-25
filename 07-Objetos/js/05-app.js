"use strict";
const producto = {
	nombre: "MOnitor 20 cm",
	precio: 2343434,
	disponible: true, 
	informacion: {
		peso: "80 kg",
		medida: "ln"
	},
	fabricacion: {
		pais: "Argentina",
		provincia: "Córdoba"
	}
}

console.log(producto);
console.log(producto.informacion.peso);