const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, indice) => {
    if(mes === "Abril")
    {
        console.log(`Encontrado en el indice ${indice}`);
    }
} );

// Encontrar el índice de Abril
const indice = meses.findIndex( mes => mes === "Diciembre" );
console.log(indice);

// Desarreglo de ojetos
const indice2 = carrito.findIndex( denominacion => denominacion.nombre === "Tablet" );
console.log(indice2);