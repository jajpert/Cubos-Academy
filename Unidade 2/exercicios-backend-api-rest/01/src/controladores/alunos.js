let { alunos } = require("../dados/alunosdados");


let id = 1;

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};


const obterAluno = (req, res) => {
    const {id} = req.params;

    if(isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O ID deve ser um número válido'});
    }

    const aluno = alunos.find((atual) => {
        return atual.id === Number(id);
    });

    if(!aluno) {
        return res.status(404).json({mensagem: 'O aluno não foi encontrado'});
    }

    return res.status(200).json(aluno);
};


const cadastrarAluno = (req, res) => {
    const {nome, sobrenome, idade, curso} = req.body;

    if(!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({mensagem: 'Propriedades estão faltando'});
    }

    if(Number(idade) < 18) {
        return res.status(400).json({mensagem: 'Aluno menor de idade'});
    }

    const aluno = {
        id: id++,
        nome,
        sobrenome,
        idade: Number(idade),
        curso
    };

    alunos.push(aluno);

    return res.status(201).send();
};


const deletarAluno = (req, res) => {
    let {id} = req.params;

    if(isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O ID deve ser um número válido'});
    }

    const aluno = alunos.find((atual) => {
        return atual.id === Number(id);
    });

    if(!aluno) {
        return res.status(404).json({mensagem: 'O aluno a ser excluído não foi encontrado'});
    }

    alunos = alunos.filter((atual) => {
        return atual.id !== Number(id);
    });

    return res.status(200).json(aluno);
};

module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    deletarAluno
};