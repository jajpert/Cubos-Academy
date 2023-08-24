const express = require('express');
const rotas = express();
const { get, getPorId } = require('./controller/imoveis');

rotas.get('/', get);
rotas.get('/imoveis/:id', getPorId);

module.exports = rotas;