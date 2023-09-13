let {aulas, identificadorAula} = require('../bancodedados');


const listarAulaColecao = (req, res) => {
    return res.send(aulas);
}

const detalharAula = (req, res) => {
    const {id} = req.params;

    const aulaFiltrada = aulas.find((atual) => {
        return atual.id === Number(id);
    })

    if(!aulaFiltrada) {
        return res.status(404).json({mensagem: 'Aula não encontrada.'})
    }

    return res.status(200).send(aulaFiltrada);
}

module.exports = {
    listarAulaColecao,
    detalharAula
}