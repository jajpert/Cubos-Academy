const entrada = require('prompt-sync')({sigint: true});

const alturaEmCm = entrada('Digite sua altura em cm: ');

if(alturaEmCm >= 180) {
    console.log('APROVADO');
} else {
    console.log('REPROVADO');
}
