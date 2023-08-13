const entrada = require('prompt-sync')({sigint: true});

const ladoA = entrada('Digite o lado A: ');
const ladoB = entrada('Digite o lado B: ');

if(ladoA == ladoB){
    console.log('SIM');
} else{
    console.log('NÃO');
}