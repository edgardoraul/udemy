"use strict";
const autenticado = true;

if(autenticado)
{
    console.log("El usuario está autenticaducho");
}

const puntaje = 299;

function revisarPuntaje()
{
    if( puntaje > 400 )
    {
        console.log("Excelente");
        return;
    }
    
    if( puntaje > 300 )
    {
        console.log("Buen puntaje...felicidades.");
        return;
    }
}

revisarPuntaje();