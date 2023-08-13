const entrada = require('prompt-sync')({sigint: true});


let distancia = entrada("Digite a distância percorrida: ");
let tempo = entrada("Digite o tempo: ");

let velocidade = distancia / tempo;

let km = velocidade * 3.6;

console.log(`A velocidade média é ${Math.round(km)}km/h`);