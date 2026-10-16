// Dato l'array ["latte", "pane", "uova"], trova il primo prodotto che contiene la lettera e.

const catalogo = ["latte", "pane", "uova"];
const trovaLettera = catalogo.find(prodotto => prodotto.includes("e"));

console.log(trovaLettera);