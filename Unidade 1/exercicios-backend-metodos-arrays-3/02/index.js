const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

let cidadesReduce = cidades.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador;

    if(elementoAtual.length > maior.length) {
        maior = elementoAtual
    }

    return maior
});

console.log(cidadesReduce);