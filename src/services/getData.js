/**
 * función asincrona que realiza una petición a 
 * la API con el fin de traer los personajes
 * 
 * @param page - # de pagina
 * @returns lista de 20 personajes
 */

// declaro una URL base de la api
const baseURL = ' https://rickandmortyapi.com/api';

//función para traer info personal de 1 solo personaje
const getCharacter = async (id) => {
        //en res creo el fetch que deseo, hago que espere a finalizar ese proceso y lo guardo en esa variable
        const res = await fetch(baseURL + '/character/' + id);
        //en data transformo los datos obtenidos con .json() y los guardo en esa varaible
        const data = await res.json();
        //devuelvo el resultado a quien lo invoque
        return data;
}

// creo una función async/await para traer toda la lista de los personajes
const getCharacters = async () => {
    //en res creo el fetch que deseo, hago que espere a finalizar ese proceso y lo guardo en esa variable
    const res = await fetch(baseURL + '/character');
    //en data transformo los datos obtenidos con .json() y los guardo en esa varaible
    const data = await res.json();
    //devuelvo el resultado a quien lo invoque
    return data;
}

//expongo esta porción de código al resto de proyecto. Para exportar + de 1 función lo paso como objeto
export {getCharacters, getCharacter};

// si exporto 1 sola función la sintaxis es la siguiente: export default getCharacter;