// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners()
{
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

// Funciones
function agregarTweet(e)
{
    e.preventDefault();

    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    // Crear el botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear el elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;

    // Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);

    // Añade el tweet a la lista
    listaTweets.appendChild(li);

    // Añade al Local Storage
    agregarTweetLocalStorage(tweet);
}

// Eliminar el tweet del DOM.
function borrarTweet(e)
{
    e.preventDefault();
    if(e.target.className === 'borrar-tweet')
    {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos del local storage en la lista
function localStorageListo()
{
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    console.log(tweets);
    tweets.forEach(function(tweet)
    {
        // Crear el botón de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // Crear el elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;

        // Añade el botón de borrar al tweet
        li.appendChild(botonBorrar);

        // Añade el tweet a la lista
        listaTweets.appendChild(li);     
    });
}

// Agrega tweet al local storage
function agregarTweetLocalStorage(tweet)
{
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    
    // Añadir el nuevo tweet
    tweets.push(tweet);
        
    // Agregar al local storage convirtiendo primero el arreglo en cadena de texto.
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en local storage. Retorna un arreglo.
function obtenerTweetsLocalStorage()
{
    let tweets;
    // Revisamos los valores del local storage
    if(localStorage.getItem('tweets') === null)
    {
        tweets = [];
    }
    else
    {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet)
{
    let tweets, tweetBorrar;

    // Elminina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function (tweet, index)
    {
       if(tweetBorrar === tweet)
       {
           tweets.splice(index, 1);
       }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets));
}