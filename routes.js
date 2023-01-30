const express = require('express')
const route = express.Router()
const home = require('./src/controllers/home')

// Main Page
route.get('/', home.pagInicialGet)

// Login
const login = require('./src/controllers/login')
route.get('/login', login.validaUsuario)

//Registro
const cadastro = require('./src/controllers/cadastro')
route.get('/registro', cadastro.registro)
route.post('/competencia', cadastro.competenciaInsert)

//Multer (controle de imagens)
const multer = require("multer")
const config = require('./src/config/multer')
route.post('/materia', multer(config).single('foto'), cadastro.materiaInsert)
route.post('/usuario', multer(config).single('foto'), cadastro.usuarioInsert)
route.post('/conteudo', multer(config).single('arquivopasta'), cadastro.conteudoInsert)

//MAIN
const main = require('./src/controllers/main')
route.get('/main/:id', main.main)

//AULAS
const aulas = require('./src/controllers/aulas')
route.get('/aulas/:id/:materia', aulas.aulas)

module.exports = route