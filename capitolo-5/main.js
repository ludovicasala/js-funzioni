function mediaStudente(voto1, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}

function isPromosso(media) {
    return media >= 6;
}

const media = mediaStudente(4, 8, 6);
const promosso = isPromosso(media);

if (promosso === true) {
    console.log('Promosso con media ' + media);
} else {
    console.log('Bocciato con media ' + media);
}