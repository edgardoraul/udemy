"use strict";

const producto = {
	nombre: "Monitor 20 cm",
	precio: "$ 1.500",
	disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread operador
const resultado2 = {...producto, ...medidas};
console.log(resultado2);