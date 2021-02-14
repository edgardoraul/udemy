"use strict";
const producto = {
	nombre: "Monitor 20 cm",
	precio: 15000,
	disponible: true, 
	informacion: {
        medidas: {
            peso: "80 kg",
            medida: "pulguientas"
        },
        fabricacion: {
            pais: "Argentina",
            provincia: "Córdoba"
        }
	}
}

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(informacion)
console.log(fabricacion)
console.log(pais)