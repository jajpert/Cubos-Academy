const express = require('express');
const rotas = express();
const pokemon = require('./controlador/pokemon');

rotas.get('/pokemon', pokemon.mostrarTodos);
rotas.get('/pokemon/:idOuNome', pokemon.obterPokemon);

module.exports = rotas;