
/**
 * En esta funcion le damos el valor a la carta
 * @param {String} carta 
 * @returns {number} el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}