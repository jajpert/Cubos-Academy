const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const encontraLivro = (nomeDoLivro) => {
    let posicao = livros.indexOf(nomeDoLivro);
    console.log(`O livro está na posição ${posicao + 1}`);
}
encontraLivro(nomeDoLivro);