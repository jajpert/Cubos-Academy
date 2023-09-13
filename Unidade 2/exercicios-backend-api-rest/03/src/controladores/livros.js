let livrosdados = require('../dados/livrosdados');

let proximoId = 3;

const listarLivros = (req, res) => {
    return res.json(livrosdados);
}

const obterLivro = (req, res) => {
    let { id } = req.params;

    id = Number(id);

    if(isNaN(id)) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }

    const livro = livrosdados.find(atual => {
        return atual.id === id;
    });
    console.log(id);
    console.log(livro);

    if(livro) {
        return res.status(200).json(livro);
    }
    
    return res.status(404).json({mensagem: 'Não existe livro para o ID informado.'});
}

const adicionarLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;

    if(!titulo) {
        return res.status(400).json({mensagem: 'O campo titulo é obrigatório'});
    }

    if(!autor) {
        return res.status(400).json({mensagem: 'O campo autor é obrigatório'});
    }

    if(!ano) {
        return res.status(400).json({mensagem: 'O campo ano é obrigatório'});
    }

    if(!numPaginas) {
        return res.status(400).json({mensagem: 'O campo numPaginas é obrigatório'});
    }

    const livro = {
        id: proximoId++,
        titulo,
        autor,
        ano,
        numPaginas: Number(numPaginas)
    };

    livrosdados.push(livro);

    return res.status(201).send();
}

const substituirLivros = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    if(!titulo) {
        return res.status(400).json({mensagem: 'O campo titulo é obrigatório'});
    }

    if(!autor) {
        return res.status(400).json({mensagem: 'O campo autor é obrigatório'});
    }

    if(!ano) {
        return res.status(400).json({mensagem: 'O campo ano é obrigatório'});
    }

    if(!numPaginas) {
        return res.status(400).json({mensagem: 'O campo numPaginas é obrigatório'});
    }

    if(isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }
    
    const livro = livrosdados.find(atual => {
        return atual.id === Number(id);
    });
    console.log(livro);

    if(!livro) {
        return res.status(404).json({mensagem: 'Não existe livro a ser substituído para o ID informado.'});
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = Number(numPaginas);

    return res.json({mensagem: 'Livro substituído.'});
}

const alterarParteLivro = (req, res) => {
    let { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    id = Number(id);

    if(isNaN(id)) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }

    const livro = livrosdados.find(atual => {
        return atual.id === id;
    });

    if(!livro) {
        return res.status(404).json({mensagem: 'Não existe livro a ser alterado para o ID informado.'});
    }

    if(titulo) {
        livro.titulo = titulo;
    }

    if(autor) {
        livro.autor = autor;
    }

    if(ano) {
        livro.ano = ano;
    }

    if(numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.status(200).json({mensagem: 'Livro alterado'});
}

const excluirLivro = (req, res) => {
    const { id } = req.params;

    if(isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }
    
    const indiceLivro = livrosdados.findIndex(atual => {
        return atual.id === Number(id);
    });
    
    if(indiceLivro < 0) {
        return res.status(404).json({mensagem: 'Não existe livro a ser excluído para o ID informado.'});
    }

    livrosdados.splice(indiceLivro, 1);

    return res.status(200).json({mensagem: 'Livro removido'});
}

module.exports = {
    listarLivros,
    obterLivro,
    adicionarLivro,
    substituirLivros,
    alterarParteLivro,
    excluirLivro
}