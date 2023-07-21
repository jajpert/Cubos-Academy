const entrada = require('prompt-sync')({sigint: true});

let comentario = entrada();

const temCovid = comentario.toLowerCase().includes('covid');
const temPandemia = comentario.toLowerCase().includes('covid');

if(temCovid || temPandemia) {
    console.log('Comentário bloqueado por conter palavras proibidas');
}