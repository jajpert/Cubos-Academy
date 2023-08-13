const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesCom8 = cidades.filter((elementoAtual) => {
    return elementoAtual.length <= 8;
});

console.log(cidadesCom8.join(', '));