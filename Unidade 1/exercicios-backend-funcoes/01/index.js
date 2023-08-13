function corrigirProva(prova) {
    let valor_item = prova.valor / prova.questoes.length;
    let acerto = 0
    for(let item of prova.questoes) {
        if(item.resposta == item.correta) {
            acerto++;
        }
    }

    let nota = valor_item * acerto;
    

    return `O aluno(a) ${prova.aluno} acertou ${acerto} questões e obteve a nota ${nota}`;
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


console.log(corrigirProva(prova));