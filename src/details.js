//traigo la función de solicitud de datos
import { getCharacter } from "./services/getData.js";

//creo una constante donde almaceno el lugar donde voy a imprimir los datos obtenidos
const container = document.querySelector('#character');
const loader = document.getElementById('lds-ring');
//traigo el id
const getID = localStorage.getItem('charID');

const loadCharacter = async (id) => {
    const data = await getCharacter(id);
     //oculto el loader estableciendo el display en none
     loader.style.display = 'none';

     //creo un article
     const article = document.createElement('article');
     // para ocultar el loader

     //le agrego las clases seteadas desde CSS
     article.setAttribute('class', 'character');
     //dentro de ese article incluyo la siguiente info
     article.innerHTML = `
     <img src="${data.image}" />
     <h3>${data.name}</h3>
     <p class="data"><span>Origen: </span>${data.origin.name}</p>
     <p class="data"><span>Locación Actual: </span>${data.location.name}</p>
     <div>
         <p><span>Especie: </span>${data.species}</p>
         <p class="${data.status.toLowerCase()}"></p>
     </div>
     `; //el backstick permite escribir HTML y JS juntos
     container.appendChild(article);
};

loadCharacter(getID);
