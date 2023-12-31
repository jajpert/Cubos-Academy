let {identificadorAula, instrutores, aulas} = require('../bancodedados');

const cadastrarAula = (req, res) => {
    const {idInstrutor} = req.params;
    const {titulo, descricao} = req.body

    const instrutor = instrutores.find((atual) => {
        return atual.id === Number(idInstrutor)
    });

    if(!instrutor) {
        return res.status(404).json({mensagem: 'O instrutor não existe'});
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);

}

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
}

const obterAula = (req, res) => {
    const {id} = req.params;

    aula = aulas.find((atual) => {
        return atual.id === Number(id);
    })

    if(!aula) {
        return res.status(404).json({mensagem: 'Aula não encontrada'});
    }

    return res.status(200).json(aula);
}

const obterAulaInstrutor = (req, res) => {
    const {idInstrutor} = req.params;

    const instrutor = instrutores.find((atual) => {
        return atual.id === Number(idInstrutor)
    });

    if(!instrutor) {
        return res.status(404).json({mensagem: 'O instrutor não existe'});
    }

    const aulasEncontradas = aulas.filter((atual) => {
        return atual.instrutor_id === instrutor.id;
    })

    return res.status(200).json(aulasEncontradas);
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulaInstrutor
}