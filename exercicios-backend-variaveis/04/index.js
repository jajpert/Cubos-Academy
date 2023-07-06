const entrada = require('prompt-sync')({sigint: true});

let c = entrada("Digite o valor inicial da dívida: ");
let i = parseFloat(entrada("Digite a taxa fixa de juros: "));
let t = entrada("Digite o período de tempo: ");


let montante = 1000 * (1 + i) ** t

console.log(`O montante é igual a ${Math.round(montante)}`);