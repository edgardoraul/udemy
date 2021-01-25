// Ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio)
{
	return total += precio;
}
function calcularImpuesto(vv) {
	return vv * 1,21;
}
total = agregarCarrito(600);
total = agregarCarrito(6200);
total = agregarCarrito(200);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es ${totalPagar}`);

console.log(total);