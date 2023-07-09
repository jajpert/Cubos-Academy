const entrada = require('prompt-sync')({sigint: true});

const caractere = entrada('Digite um caractere: ');

if (letra(caractere)) {
    letra(caractere)
} else if(caractere == 0 || caractere == 1 || caractere == 2 || caractere == 3 || caractere == 4 || caractere == 5 || caractere == 6 || caractere == 7 || caractere == 8 || caractere == 9) {
    console.log('Número');
}

function letra(le) {
    if (caractere == 'A' || caractere == 'E' || caractere == 'I' || caractere == 'O' || caractere == 'U') {
        console.log('Vogal maiúscula');
    
    } else if(caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
        console.log('Vogal minúscula');
    } else {
        return false;
    }
}