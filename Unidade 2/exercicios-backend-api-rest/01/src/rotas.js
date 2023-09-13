const express = require('express');
const validaSenha = require('./intermediarios');
const alunos = require('./controladores/alunos');
const rotas = express();

rotas.use(validaSenha);

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/aluno/:id', alunos.obterAluno);
rotas.post('/alunos', alunos.cadastrarAluno);
rotas.delete('/alunos/:id', alunos.deletarAluno);

rotas.use('/', (req, res) => {
    console.log(req.url, req.method, req.body, req.ip);
    return res.status(404).json({mensagem: "rota não existe!"});
});

module.exports = rotas;