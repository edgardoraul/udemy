const reproductor = {
	reproducir: function(id) {
		console.log(`Reproduciendo camsión con id: ${id}`);
	},
	pausar: function() {
		console.log("Pausando...");
	},
	borrar: function(id) {
		console.log(`Borrando la kansión ${id}`);
	},
	lista: function(nombre) {
		console.log(`Sonando lista ${nombre}`);
	}
}

reproductor.reproducir(14);
reproductor.pausar();
reproductor.borrar(45);
reproductor.lista("M31");
reproductor.lista("Folclore Argentino");
