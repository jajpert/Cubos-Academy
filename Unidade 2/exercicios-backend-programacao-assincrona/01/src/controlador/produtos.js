const bancodedados = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listarProdutos = (req, res) => {
    return res.json(bancodedados);
}

const obterProduto = (req, res) => {
    let { idProduto } = req.params;

    idProduto = Number(idProduto);
    if(isNaN(idProduto)) {
        return res.status(404).json({mensagem: 'O id deve ser um número válido'});
    }

    const produto = bancodedados.find(atual => atual.id === idProduto);

    if(!produto) {
        return res.status(400).json({mensagem: 'Não foi encontrado nenhum produto com o id informado'});
    }

    return res.json(produto);
}

const frete = async (req, res) => {
    let { idProduto, cep } = req.params;

    const estado = await getStateFromZipcode(cep);
    
    idProduto = Number(idProduto);
    if(isNaN(idProduto)) {
        return res.status(404).json({mensagem: 'O id deve ser um número válido'});
    }

    const produto = bancodedados.find(atual => atual.id === idProduto);

    if(!produto) {
        return res.status(400).json({mensagem: 'Não foi encontrado nenhum produto com o id informado'});
    }

    let frete = 0;

    if(estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        frete = produto.valor * 0.1;
    } else if(estado === 'SP' || estado === 'RJ') {
        frete = produto.valor * 0.15;
    } else {
        frete = produto.valor * 0.12;
    }

    const objeto = {
        produto,
        estado,
        frete
    };

    return res.json(objeto);
}



module.exports = {
    listarProdutos,
    obterProduto, 
    frete
}