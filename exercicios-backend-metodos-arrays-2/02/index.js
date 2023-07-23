const palavras = ["livro", "caneta", "sol", "carro", "orelha"]


const valida = palavras.some((elementoAtual) => {
    return elementoAtual.length > 5;
});

if(valida) {
    console.log('existe palavra inválida');
} else {
    console.log('não existe palavra inválida');
}
