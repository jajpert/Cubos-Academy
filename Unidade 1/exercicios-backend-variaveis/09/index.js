const entrada = require('prompt-sync')({sigint: true});

let n = entrada("Digite o número de lados do polígono: ");
let s = (n - 2) * 180;
let a = s / n;

console.log(`O valor da soma dos ângulos internos é ${a}`);