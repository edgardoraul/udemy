iniciarApp();

function iniciarApp()
{
    console.log("iniciando app...");
    segundaFuncion();
}

function segundaFuncion()
{
    console.log("desde la segunda función");
    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario)
{
    console.log("autenticando usuario...espere...");
    console.log(`usuario autenticado correctamente: ${usuario}.`);
}