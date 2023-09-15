const express = require('express');
const rotas = express();
const produtos = require('./controlador/produtos');

rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:idProduto', produtos.obterProduto);
rotas.get('/produtos/:idProduto/frete/:cep', produtos.frete);

module.exports = rotas;