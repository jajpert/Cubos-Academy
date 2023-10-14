const express = require('express');
const rotas = express();

const autor = require('./controller/autor');
const livro = require('./controller/livro');

rotas.post('/autor', autor.cadastrarAutor);
rotas.get('/autor/:id', autor.obterAutor);
rotas.post('/autor/:id/livro', autor.cadastrarLivroAutor);

rotas.get('/livros', livro.listarLivros);

module.exports = rotas;