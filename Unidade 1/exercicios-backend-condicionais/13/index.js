const entrada = require('prompt-sync')({sigint: true});

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = entrada('Digite o tipo de pagamento: ');

//valor da mercadoria (centavos)
const valorDoProduto = entrada('Digite o valor do produto em centavos: ');

if(tipoDePagamento == 'credito') {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.05);
    valorFinal /= 100;

    console.log(`Valor a ser pago: R${valorFinal.toFixed(2)}`);

} else if(tipoDePagamento == 'cheque') {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.03);
    valorFinal /= 100;

    console.log(`Valor a ser pago: R${valorFinal.toFixed(2)}`);

} else if(tipoDePagamento == 'debito' || tipoDePagamento == 'dinheiro') {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.10);
    valorFinal /= 100;

    console.log(`Valor a ser pago: R${valorFinal.toFixed(2)}`);

} else {
    console.log('Tipo de pagamento inválido.');
}