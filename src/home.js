//traigo la función de solicitud de datos
import {getCharacters} from "./services/getData.js";

//creo una constante donde almaceno el lugar donde voy a imprimir los datos obtenidos
const container = document.querySelector('#characters');
const loader = document.getElementById('lds-ring');

// muestro por consola los datos traidos desde la API
const charactersList = async () => {
    const { results } = await getCharacters();
    //oculto el loader estableciendo el display en none
    loader.style.display = 'none';
    //por cada resultado...
    results.forEach(character => {
        //creo un article
        const article = document.createElement('article');
        // para ocultar el loader

        //le agrego las clases seteadas desde CSS
        article.setAttribute('class', 'character');
        //dentro de ese article incluyo la siguiente info
        article.innerHTML = `
        <img src="${character.image}" />
        <h3>${character.name}</h3>
        <div>
            <p>${character.species}</p>
            <p class="${character.status.toLowerCase()}"></p>
        </div>
        <a href="/#/${character.id}">Ver Detalles</a>
        `; //el backstick permite escribir HTML y JS juntos
        container.appendChild(article);
    });
}

// llamo a la función 
charactersList();

//para derivar a la página con los datos personales de cada personaje al presionar el link teniendo en cuenta el hash (#)
window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1];

    //guardo la info para redireccionar el localstorage
    localStorage.setItem('charID', id);

    //redirecciono
    window.location.replace('/character.html');
} )