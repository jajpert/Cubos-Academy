const entrada = require('prompt-sync')({sigint: true});

let raio = entrada("Digite o raio do círculo: ");
let perimetro = 2 * Math.PI * raio;
let area = Math.PI * raio ** 2;

console.log(`A área do círculo é ${area.toFixed(2)}`);
console.log(`O perímero do círculo é ${perimetro.toFixed(1)}`);