const numero1 = 20;
const numero2 = "20";

console.log( parseInt(numero2) );

console.log( numero1.toString() );

function sumar(a, b)
{
    b = parseInt(b);
    console.log( a + b );
}
sumar(numero1, numero2);