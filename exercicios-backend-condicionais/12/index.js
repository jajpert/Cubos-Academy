const entrada = require('prompt-sync')({sigint: true});

const diaDaSemana = entrada('Digite um número da semana: ');

if(diaDaSemana == 1) {
    console.log('Segunda feira');
} else if(diaDaSemana == 2) {
    console.log('Terça feira');
} else if(diaDaSemana == 3) {
    console.log('Quarta feira');
} else if(diaDaSemana == 4) {
    console.log('Quinta feira');
} else if(diaDaSemana == 5) {
    console.log('Sexta feira');
} else if(diaDaSemana == 6) {
    console.log('Sábado');
} else if(diaDaSemana == 7) {
    console.log('Domingo');
} else {
    console.log('O dia da semana informado não é válido.');
}