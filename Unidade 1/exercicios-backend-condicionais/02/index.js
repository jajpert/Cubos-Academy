const entrada = require('prompt-sync')({sigint: true});

const jogada1 = 5;
const jogada2 = 3;

if(jogada1 % 2 == 0) {
    console.log('jogada1 venceu');
} else if(jogada2 % 2 == 0) {
    console.log('jogada2 venceu');
} else {
    console.log('ninguém venceu');
}