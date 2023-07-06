const entrada = require('prompt-sync')({sigint: true});

let meu_dinheiro = entrada("Digite o valor que você tem: ");
let valor_total = entrada("Digite o valor do produto: ");
let desconto = valor_total - meu_dinheiro;

let percentual_desconto = (desconto / valor_total) * 100;

console.log(`O percentual do desconto é %${Math.round(percentual_desconto)}`);