const express = require('express');
const app = express();

const {filtrarCarros, listarCarros} = require('./controller/carros');
const {verificaSenha} = require('./midleware')

app.use(verificaSenha);

app.get('/carros', filtrarCarros);

app.get('/listarCarros/:id', listarCarros);

app.listen(8000, () => {
    console.log('servidor inicializado com sucesso');
});