
import _ from "underscore";

//esto es para darle mas informacion a los demas desarrolladores
/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas   ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = ( tiposDeCartas, tiposEspeciales) => { // con el esport es para exportar algo individual, puedo importar esta funcion desde otro lugar

    if ( !tiposDeCartas || tiposDeCartas === 0 )
        throw Error ("tipos de cartas es obligatorio como un string"); //esto es para ayudar a los otros desarrolladores si necesitan hacerle mantenimiento al software

    if ( !tiposEspeciales || tiposEspeciales === 0 )
        throw Error ("tiposEspeciales es obligatorio como un string");

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

//const miNombre = () => {
//    console.log("Diego Andres Posada");
//}
    

// export default miNombre; //asi puedo export algo por defecto, 