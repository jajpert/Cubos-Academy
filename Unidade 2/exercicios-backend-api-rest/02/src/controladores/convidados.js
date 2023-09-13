let convidados = require("../dados/convidadosdados")

const listarConvidados = (req, res) => {
    const { nome } = req.query;

    if(!nome) {
        return res.json(convidados);
    }
    
    const convidado = convidados.find((atual) => {
        return atual === nome;
    });

    if(!convidado) {
        return res.json({mensagem: 'O convidado buscado não está presente na lista.'});
    }

    return res.json({mensagem: 'Convidado presente.'});
}

const adicionar = (req, res) => {
    const { nome } = req.body;

    const convidado = convidados.find((atual) => {
        return atual === nome;
    });
    console.log(convidado);
    if(!convidado) {
        convidados.push(nome);
        return res.json({mensagem: 'Convidado adicionado.'});
    }

    return res.json({mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.'});
}

const remover = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find((atual) => {
        return atual === nome;
    });

    if(!convidado) {
        return res.json({mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.'});
    }
        
    convidados = convidados.filter(atual => {
        return atual !== nome;
    });

    return res.json({mensagem: 'Convidado removido.'});

    
}

module.exports = {
    listarConvidados,
    adicionar,
    remover
}