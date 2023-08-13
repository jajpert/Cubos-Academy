const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('Olá... Esse é o meu servidor com express');
});

app.get('/', (req, res) => {
    res.send('Essa é a minha rota principal');
});


app.get('/array', (req, res) => {
    const array = [0, 1, 2, 3, 4];
    res.send(array);

});

app.listen(3000);