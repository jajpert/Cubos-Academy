const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

app.get('/jogadas', (req, res) => {
    const nomeDoJogador = jogadores[jogadorDaVez];
    res.send(`É a vez de ${nomeDoJogador}`);
    jogadorDaVez++;

    if(jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }
});

app.listen(3000,() => {
    console.log('Servidor inicializado com sucesso');
});