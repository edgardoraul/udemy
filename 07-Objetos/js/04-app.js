// Destructuring

const producto = {
	nombre: "Monitor 20 cm",
	precio: "$ 1.500",
	disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

const { nombre, precio, disponible, noexiste } = producto;
console.log(nombre, "\n" + precio + "\n",  disponible, noexiste);
