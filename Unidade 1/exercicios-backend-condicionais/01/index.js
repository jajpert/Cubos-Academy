const entrada = require('prompt-sync')({sigint: true});

const jogada1 = entrada("Digite sua jogada: ");
const jogada2 = entrada("Digite sua jogada: ")

if (jogada1 == 'tesoura'){
    if(jogada2 == 'tesoura'){
        console.log('empate');
    } else if(jogada2 == 'papel') {
        console.log('jogada1');
    } else if(jogada2 == 'pedra') {
        console.log('jogada2');
    } else {
        console.log('Valor inválido');
    }

} else if(jogada1 == 'pedra') {
    if(jogada2 == 'tesoura') {
        console.log('jogada1');
    } else if(jogada2 == 'papel') {
        console.log('jogada2');
    } else if (jogada2 == 'pedra') {
        console.log('empate');
    } else {
        console.log('Valor inválido');
    }

} else if(jogada1 == 'papel') {
    if(jogada2 == 'tesoura') {
        console.log('jogada2');
    } else if(jogada2 == 'papel') {
        console.log('empate');
    } else if (jogada2 == 'pedra') {
        console.log('jogada2');
    } else {
        console.log('Valor inválido');
    }
} else {
    console.log('Valor inválido');
}
    