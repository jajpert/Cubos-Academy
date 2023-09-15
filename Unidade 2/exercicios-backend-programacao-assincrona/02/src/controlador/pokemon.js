const { listarPokemons, detalharPokemon } = require('utils-playground');

const mostrarTodos = async (req, res) => {
    const {pagina} = req.query;

    const listaPokemons = await listarPokemons(pagina ?? 1);

    return res.json(listaPokemons);
}

const obterPokemon = async (req, res) => {
    let { idOuNome } = req.params;

    const pokemon = await detalharPokemon(idOuNome);
    
    const {id, name, height, weight, base_experience, forms, abilities, species} = pokemon;

    return res.json({id, name, height, weight, base_experience, forms, abilities, species});    
}

module.exports = {
    mostrarTodos,
    obterPokemon
}