const numeroCartao = '1111222233334444';

let numeroCartaoFormat = "";
let primeiraParte = numeroCartao.slice(0, 4);
let ultimaparte = numeroCartao.slice(-4);

numeroCartaoFormat = `${primeiraParte}${ultimaparte.padStart(12, "*")}`;

console.log(numeroCartaoFormat);