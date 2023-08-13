const entrada = require('prompt-sync')({sigint: true});

const primeiroNome = entrada('Digite o primeiro nome: ');
const sobrenome = entrada('Digite o sobrenome: ');
const apelido = entrada('Digite o apelido: ');


if(primeiroNome == "") {
    console.log('Primeiro nome deve ser preenchido');
} else if(primeiroNome != "") {
    if(apelido != "") {
        console.log(apelido);
        
    } else if(sobrenome != "") {
        console.log(`${primeiroNome} ${sobrenome}`);
        
    } else if(sobrenome == "" && apelido == "") {
        console.log(primeiroNome);
    }
}