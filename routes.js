const express = require('express')
const route = express.Router()
const home = require('./src/controllers/home')

// Main Page
route.get('/', home.pagInicialGet)

// Login
const login = require('./src/controllers/login')
route.post('/login', login.validaUsuario)

// Voltar
const voltar = require('./src/controllers/voltar')
route.post('/return', voltar.retorna)

// Registro
const cadastro = require('./src/controllers/cadastro')
route.get('/registro', cadastro.registro)
route.post('/competencia', cadastro.competenciaInsert)

// Multer (controle de imagens)
const multer = require("multer")
const config = require('./src/config/multer')
route.post('/materia', multer(config).single('foto'), cadastro.materiaInsert)
route.post('/usuario', multer(config).single('foto'), cadastro.usuarioInsert)
route.post('/conteudo', multer(config).single('arquivopasta'), cadastro.conteudoInsert)

// AULAS
const aulas = require('./src/controllers/aulas')
route.get('/aulas/:materia', aulas.aulas)
route.post('/aulas/:materia', aulas.aulasPost)

module.exports = route