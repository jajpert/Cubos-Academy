const express = require('express');
const usuarios = require('./controladores/usuarios');
const pokemons = require('./controladores/pokemons');
const autenticacao = require('./intermediarios/autenticacao');
const rotas = express();

rotas.post('/cadastroUsuario', usuarios.cadastroUsuario);
rotas.post('/login', usuarios.login);

rotas.use(autenticacao);

rotas.post('/cadastroPokemon', pokemons.cadastrarPokemons);
rotas.patch('/atualizarPokemon/:id', pokemons.atualizarPokemon);
rotas.get('/listarPokemon', pokemons.listarPokemons);
rotas.get('/detalharPokemon/:id', pokemons.detalharPokemon);
rotas.delete('/excluirPokemon/:id', pokemons.exclusaoPokemon);

module.exports = rotas;