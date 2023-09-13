const express = require('express');
const rotas = express();

const instrutores = require('./controllers/instrutores');
const aulas = require('./controllers/aulas');

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.deletarInstrutor)

rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAula);
rotas.get('/aulas', aulas.listarAulas);
rotas.get('/aulas/:id', aulas.obterAula);
rotas.get('/instrutores/:idInstrutor/aulas', aulas.obterAulaInstrutor);

module.exports = rotas;