// Verifica se nell'array [2, 4, 7] esiste almeno un numero dispari.

const numeri = [2, 4, 7];
const esisteNumeroDispari = numeri.same(numero => numero % 2 !== 0);

console.log(esisteNumeroDispari);