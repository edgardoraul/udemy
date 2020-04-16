// Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");


// Listeners
cargarEventListeners()
function cargarEventListeners()
{
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click", comprarCurso);
}





/* ========= Funciones ========= */
// Función que añade al carrito
function comprarCurso(e)
{
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito'))
    {
        const curso = e.target.parentElement.parentElement;
        console.log(curso);
    }
}