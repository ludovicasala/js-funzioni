/* Scrivi la stessa funzione in due modi: prima in forma classica e poi come arrow function.
La funzione deve ricevere il prezzo di un prodotto e restituire il prezzo finale con il 22% di IVA.
*/

function calcolaIva(prezzo) {
    return prezzo * 1.22;
}

const calcolaIVaArrow = prezzo => prezzo * 1.22;

console.log(calcolaIva(52));
console.log(calcolaIVaArrow(52));