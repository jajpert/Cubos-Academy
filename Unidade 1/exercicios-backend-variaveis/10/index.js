const entrada = require('prompt-sync')({sigint: true});

let a = entrada("Digite o valor de a: ");
let b = entrada("Digite o valor de b: ");
let c = entrada("Digite o valor de c: ");

let delta = b**2 - 4*a*c

console.log(`O resultado de delta é ${delta}`);