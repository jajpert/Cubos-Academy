const { vezDeJogar, adicionar, remover, consultar } = require("./controller/rodadas");

const express = require('express');
const rotas = express();


rotas.get('/', vezDeJogar);
rotas.get('/consultar', consultar);
rotas.get('/remover', remover);
rotas.get('/adicionar', adicionar);

module.exports = rotas