// Controlla se tutti gli importi di [20, 15, 18] sono almeno 10 euro.

const denaro = [20, 15, 18];
const sopraDieciEuro = denaro.every(euro => euro >= 10);

console.log(sopraDieciEuro);