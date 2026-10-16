// Dato l'array dei prezzi [15, 25, 35], crea un nuovo array con il prezzo scontato del 10%.

const prezzi = [15, 25, 35];
const prezziConSconto = prezzi.map(prezzo => prezzo * 0.9);

console.log(prezziConSconto);