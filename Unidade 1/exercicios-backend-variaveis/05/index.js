const entrada = require('prompt-sync')({sigint: true});

let x1 = entrada("Digite o x1: ");
let x2 = entrada("Digite o x2: ");
let y1 = entrada("Digite o y1: ");
let y2 = entrada("Digite o y2: ");

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`A distância entre os pontos é: ${Math.round(distancia)}`);