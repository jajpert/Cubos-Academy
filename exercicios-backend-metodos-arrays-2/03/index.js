const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const revisar = palavras.some((elementoAtual) => {
    return elementoAtual == 'cerveja' || elementoAtual == 'vodka';
});

if(revisar) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras!');
}