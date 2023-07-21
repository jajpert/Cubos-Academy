const nome = 'Guido Cerqueira';

const geraNickname = (nome) => {
    let nickname = '@';

    nome = nome.split(" ");
    for(let palavra of nome) {
        nickname += palavra.toLowerCase();
    }

    if(nickname.length > 13) {
        nickname = nickname.slice(0, 13)
    }
    console.log(nickname);
}

geraNickname(nome);