const entrada = require('prompt-sync')({sigint: true});

let raio = parseInt(entrada("Digite o raio da base: "));
let altura = parseInt(entrada("Digite a altura do cilindro: "));
let area = 2 * raio * (raio + altura);

console.log(`A área total do cilindro é ${area}`);
