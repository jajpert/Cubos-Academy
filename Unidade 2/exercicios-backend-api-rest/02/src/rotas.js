const express = require('express');
const rotas = express();
const convidados = require('./controladores/convidados');

rotas.get('/convidados', convidados.listarConvidados);
rotas.get('/convidados/:nome', convidados.listarConvidados);
rotas.post('/convidados', convidados.adicionar);
rotas.delete('/convidados/:nome', convidados.remover);

module.exports = rotas