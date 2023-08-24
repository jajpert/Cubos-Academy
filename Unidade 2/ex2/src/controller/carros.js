const carros = require('../bancodedados');

const filtrarCarros = (req, res) => {
    const {marca, cor} = req.query;
    let resultado = carros;

    if(marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca == marca;
        });
    }

    if(cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor == cor;
        });
    }

    res.send(resultado);
}


const listarCarros = (req,res) => {
    const {id} = req.params;
    
    const carroEncontrado = carros.find((carro) => {
        return carro.id == id
    });
    
    res.send(carroEncontrado);
}

module.exports = {filtrarCarros, listarCarros};
