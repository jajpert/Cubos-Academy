const numeros = [8, 11, 4, 1];

let maior = Math.max.apply(null, numeros);
let menor = Math.min.apply(null, numeros);

console.log(maior - menor);