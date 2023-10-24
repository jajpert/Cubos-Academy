const express = require('express');
const usuario = require('./controladores/usuarios');
const rotas = express();

rotas.post('/cadastro', usuario.cadastrarUsuario);
rotas.get('/', usuario.listarUsuario);
rotas.get('/:id', usuario.listarUsuarioId);
rotas.put('/:id', usuario.atualizarUsuario);
rotas.delete('/:id', usuario.deletarUsuario);

module.exports = rotas;