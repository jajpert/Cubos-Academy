const entrada = require('prompt-sync')({sigint: true});

let raio = entrada("Digite o valor do raio: ");
let volume = 4/3 * raio ** 3;

console.log(`O volume de uma esfera de raio ${raio} é ${volume} PI`);