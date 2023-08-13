const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const grupoDeCarros = (carros, posicao) => {
    let resultado = carros.slice(posicao, posicao + 3);
    console.log(resultado.join(" - "));
}

grupoDeCarros(nomes, posicao);