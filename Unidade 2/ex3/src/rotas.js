const express = require('express');
const rotas = express();
const aula = require('./controladores/aula');
const instrutor = require('./controladores/instrutor');

rotas.post('/instrutores/:idInstrutor/aulas',);
rotas.get('/aulas', aula.listarAulaColecao);
rotas.get('/aulas/:id', aula.detalharAula);
rotas.get('/instrutores/:idInstrutor/aulas',);

module.exports = rotas