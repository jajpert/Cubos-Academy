const entrada = require('prompt-sync')({sigint: true});

const ladoA = entrada('Digite o lado A: ');
const ladoB = entrada('Digite o lado B: ');

if(ladoA == ladoB){
    if(ladoA == 0) {
        console.log('Branco');
    } else if(ladoA == 1) {
        console.log('Ás');
    } else if(ladoA == 2) {
        console.log('Duque');
    } else if(ladoA == 3) {
        console.log('Terno');
    } else if(ladoA == 4) {
        console.log('Quadra');
    } else if(ladoA == 5) {
        console.log('Quina');
    } else if(ladoA == 6) {
        console.log('Sena');
    } else {
        console.log('valor inválido');
    }
} else{
    console.log('NÃO');
}