// Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

// Listeners
cargarEventListeners()
function cargarEventListeners()
{
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click", comprarCurso);

    // cuando se elimina un curso del carrito
    carrito.addEventListener("click", eliminarCurso);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // Al cargar documento, mostrar LS
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}





/* ========= Funciones ========= */
// Función que añade al carrito
function comprarCurso(e)
{
    e.preventDefault();

    // Delegación para agregar-carrito
    if(e.target.classList.contains('agregar-carrito'))
    {
        const curso = e.target.parentElement.parentElement;

        // Enviamos el curso seleccionado para tomar sus datos.
        leerDatosCurso(curso);
    }
}

// Lee los datos del curso
function leerDatosCurso(curso)
{
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }
    // console.log(infoCurso);

    insertarCarrito(infoCurso);

}

// Muestra el curso seleccionado en el carrito.

function insertarCarrito(curso)
{
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100" />
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);

    guradarCursoLocalStorage(curso);
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e)
{
    e.preventDefault();

    let curso,
        cursoID;
    if( e.target.classList.contains("borrar-curso") )
    {
        e.target.parentElement.parentElement.remove();
        
        curso = e.target.parentElement.parentElement;
        cursoID = curso.querySelector("a").getAttribute("data-id");
    }

    eliminarCursoLocalStorage(cursoID);
}

// Elimina los curso del carrito en el DOM
function vaciarCarrito()
{
    // forma lenta
    // listaCursos.innerHTML = "";

    // forma rápida (recomendada)
    while(listaCursos.firstChild)
    {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    
    // Vaciar el local Storage
    vaciarLocalStorage();

    return false;
}

// Almacena cursos en el carrito al localstorage
function guradarCursoLocalStorage(curso)
{
    let cursos;

    // Toma el valor d eun arreglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();

    // El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem("cursos", JSON.stringify(cursos));
}

// Comprueba que haya en localstorage
function obtenerCursosLocalStorage()
{
    let cursosLS;

    // Comprobamos si hay algo en localstorage
    if(localStorage.getItem("cursos") === null)
    {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse( localStorage.getItem("cursos") );
    }
    return cursosLS;
}

// Imprime los curso del LS en el carrito
function leerLocalStorage()
{
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function(curso){
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100" />
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    });
}

// Elimina el curso por el ID en el LS
function eliminarCursoLocalStorage(curso)
{
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    // iteramos comparando el id del curso borrado con elos del LS
    cursosLS.forEach(function(cursoLS, index)
    {
        if(cursoLS.id === curso)
        {
            cursosLS.splice(index, 1);
        }
    });
    localStorage.setItem("cursos", JSON.stringify(cursosLS));
}

// elimina todos los cursos del LS
function vaciarLocalStorage()
{
    localStorage.clear();
}