const entrada = require('prompt-sync')({sigint: true});


let po = entrada("Digite a população inicial de pessoas infectadas: ");
let x = entrada("Digite a quantidade de pessoas para as quais um paciente infectado pode transmitir: ");
let t = entrada("Digite o tempo percorrido: ");

let p = po * x ** (t/7);

console.log(`Após ${t} dias, o total de pessoas infectadas será de ${Math.round(p)}`);