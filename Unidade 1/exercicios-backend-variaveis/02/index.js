const entrada = require('prompt-sync')({sigint: true});

let f = entrada("Digite os graus em Fahrenheit: ");

let c = (f -32) * 5/9;

console.log(`C = ${Math.round(c)}`);
