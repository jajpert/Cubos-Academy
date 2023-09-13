const express = require('express');
const rotas = express();
const livros = require('./controladores/livros');

rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.obterLivro);
rotas.post('/livros', livros.adicionarLivro);
rotas.put('/livros/:id', livros.substituirLivros);
rotas.patch('/livros/:id', livros.alterarParteLivro);
rotas.delete('/livros/:id', livros.excluirLivro);

module.exports = rotas;