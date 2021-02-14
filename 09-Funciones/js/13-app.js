"use strict";
const reproductor = {
    reproducir: id => console.log(`Reproduciendo camsión con id: ${id}`),
    pausar: () => console.log("Pausando..."),
    borrar: id => console.log(`Borrando la kansión ${id}`),
    lista: nombre => console.log(`Sonando lista ${nombre}`),

    set nuevaCancion(cancion)
    {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion()
    {
        console.log(`${this.cancion}`);
    }
}
reproductor.nuevaCancion = "Ponchos al viento";
reproductor.obtenerCancion;
reproductor.reproducir(14);
reproductor.pausar();
reproductor.borrar(45);
reproductor.lista("M31");
reproductor.lista("Folclore Argentino");
