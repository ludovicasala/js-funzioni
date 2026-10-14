function convertiInEuro(dollari, tasso) {
    return dollari / tasso;
}

const euro = convertiInEuro(85, 0.90);
console.log(euro);