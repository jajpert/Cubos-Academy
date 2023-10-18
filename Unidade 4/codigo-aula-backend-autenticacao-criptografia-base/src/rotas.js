const express = require('express')
const carros = require('./controladores/carros')
const usuarios = require('./controladores/usuarios')
const verificarUsuarioLogado = require('./intermediario/autenticacao')

const rotas = express()

rotas.post('/usuario', usuarios.cadastrarUsuario)
rotas.post('/login', usuarios.login)

rotas.use(verificarUsuarioLogado)

rotas.get('/perfil', usuarios.obterPerfil)

rotas.get('/carro', carros.listarCarros)
rotas.get('/carro/:id', carros.detalharCarro)
rotas.post('/carro', carros.cadastrarCarro)
rotas.put('/carro/:id', carros.atualizarCarro)
rotas.delete('/carro/:id', carros.excluirCarro)

module.exports = rotas
