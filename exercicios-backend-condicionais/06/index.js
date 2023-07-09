const entrada = require('prompt-sync')({sigint: true});

const alturaEmCm = entrada('Digite sua altura em cm: ');

if(alturaEmCm >= 180) {
    if(alturaEmCm >= 180 && alturaEmCm <= 185) {
        console.log('LÍBERO');
    } else if(alturaEmCm >= 186 && alturaEmCm <= 195) {
        console.log('PONTEIRO');
    } else if(alturaEmCm >= 196 && alturaEmCm <= 205) {
        console.log('OPOSTO');
    } else {
        console.log('CENTRAL');
    }
} else {
    console.log('REPROVADO');
}
