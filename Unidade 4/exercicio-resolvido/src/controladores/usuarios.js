const knex = require('../conexao');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if(!nome) {
            return res.status(400).json({mensagem: 'O campo nome é obrigatório'});
        }

        const cadastro = await knex('usuario').insert({nome, email, senha}).returning('*');

        return res.status(201).json(cadastro);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const listarUsuario = async (req, res) => {
    try {
        const usuarios = await knex('usuario');

        return res.json(usuarios);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const listarUsuarioId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await knex('usuario').where('id', id).first();

        if(usuario.length < 1) {
            return res.status(404).json({mensagem: 'Usuário não existe'});
        }

        return res.json(usuario);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    try {
        const usuario = await knex('usuario').where('id', id);

        if(usuario.length < 1) {
            return res.status(404).json({mensagem: 'Usuário não existe'});
        }

        const usuarioAtualizado = await knex('usuario').where({id}).update({nome, email, senha}).returning('*');

        return res.json(usuarioAtualizado)
    } catch (error) {
        return res.status(500).json(error.message);
    }

}

const deletarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await knex('usuario').where('id', id);

        if(usuario.length < 1) {
            return res.status(404).json({mensagem: 'Usuário não existe'});
        }

        const usuarioDeletado = await knex('usuario').where({id}).del().returning('*');

        return res.json(usuarioDeletado);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    listarUsuario,
    listarUsuarioId,
    atualizarUsuario,
    deletarUsuario
}