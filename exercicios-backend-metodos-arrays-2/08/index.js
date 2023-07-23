const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasCorretas = frutas.map((frutaAtual, indice) => {    
    return `${indice} - ${frutaAtual.slice(0,1).toUpperCase()}${frutaAtual.slice(1).toLowerCase()}`;
});

console.log(frutasCorretas);