const express = require('express');
const {filtrarProfessores, encontrarUmProfessor} = require('./controller/professores');

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    //return res.send('algo deu errado');

    next();
}

const segundoIntermediario = (req, res, next) => {
    console.log('passei no segundo intermediário');
    //return res.send('algo deu errado');

    next();
}

const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediário da rota');
    //return res.send('algo deu errado');

    next();
}

//intermediários independentes
//app.use(primeiroIntermediario);
//app.use(segundoIntermediario);

app.get('/professores',intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(8000, () => {
    console.log('Servidor inicializado com sucesso');
});