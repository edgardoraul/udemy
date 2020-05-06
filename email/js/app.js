// Variables

const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const resetBtn = document.getElementById("resetBtn");

// Escuchadores
eventListeners();

function eventListeners()
{
    // Inicio d ela aplicación y deshabilitar el submit
    document.addEventListener("DOMContentLoaded", inicioApp);

    // Campos del formulario
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

    // Botón enviar en el submit
    btnEnviar.addEventListener("click", enviarEmail);

    // Botón de reset
    resetBtn.addEventListener("click", resetFormulario);
}

// Funciones
function inicioApp()
{
    btnEnviar.disabled = true;
}

// Valida que el campo tenga algo escrito
function validarCampo()
{
    // Se valida la longitud del texto y que no esté vacío
    validarLongitud(this);

    // Validar el email
    if(this.type === "email")
    {
        validarEmail(this);
    }

    let errores = document.querySelectorAll(".error");
    if(email.value !== "" && asunto.value !== "" && mensaje.value !== "")
    {
        btnEnviar.disabled = false;
    }
}

// Resetear el formulario
function resetFormulario(e)
{
    e.preventDefault();
    formularioEnviar.reset();
}

// Cuando se envía el correo
function enviarEmail(e)
{
    e.preventDefault();

    // Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = "block";

    // gif que envía el email
    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";
    
    // Ocultar el spinner y mostrar de enviado
    setTimeout(function(){
        spinnerGif.style.display = "none";
        document.querySelector("#loaders").appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000)
}

// Verifica la longitur del texto en los campos
function validarLongitud(campo)
{
    if(campo.value.length > 0)
    {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }
    else
    {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}

function validarEmail(campo)
{
    const mensaje = campo.value;
    if(mensaje.indexOf("@") !== -1)
    {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }
    else
    {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}