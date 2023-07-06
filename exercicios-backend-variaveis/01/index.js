const entrada = require('prompt-sync')({sigint: true});

let peso = entrada("Digite seu peso: ");
let altura = entrada("Digite sua altura: ");

let imc = peso / altura ** 2;

console.log(`IMC = ${imc.toFixed(2)}`);