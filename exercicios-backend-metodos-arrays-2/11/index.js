const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesComA = nomes.filter((elementoAtual) => {
    return elementoAtual.slice(0,1).toLowerCase() == 'a';
});

console.log(nomesComA);