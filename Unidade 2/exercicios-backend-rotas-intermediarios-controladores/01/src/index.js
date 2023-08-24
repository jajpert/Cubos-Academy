const express = require('express');

const app = express();

const rotas = require('./roteador');

app.use(rotas);

app.listen(3000, () => {
    console.log('Servidor inicializado com sucesso');
});