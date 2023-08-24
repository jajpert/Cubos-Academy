const imoveis = require('../dados/imoveis');

const get = (req, res) => {
    res.json(imoveis);
}

const getPorId = (req, res) => {
    let id = req.params.id;
    
    if(!isNaN(Number(id))) {
        let imovel = imoveis.filter((atual) => {
            return atual.id === Number(id);
        });

        res.json(imovel);
    }

}

module.exports = {
    get,
    getPorId
}