//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorFalta = (valorDoProduto / 100) - valorPago;
let valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
let parcelaFalta = quantidadeDoParcelamento - (valorPago / valorParcela);

console.log(`Restam ${parcelaFalta} parcelas de R$${valorParcela}`);