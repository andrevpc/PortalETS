const express = require('express')
const route = express.Router()
const home = require('./src/controllers/home')
route.get('/', home.pagInicialGet)

// Login
const login = require('./src/controllers/login')
route.post('/login', login.validaUsuario)

//Registro
const cadastro = require('./src/controllers/cadastro')
route.get('/registro', cadastro.registro)
route.post('/competencia', cadastro.competenciaInsert)
route.post('/conteudo', cadastro.conteudoInsert)
route.post('/materia', cadastro.materiaInsert)
route.post('/usuario', cadastro.usuarioInsert)

//Multer (controle de imagens)
const multer = require("multer");
const config = require('./src/config/multer');
route.post('/materia', multer(config).single('foto'), cadastro.materiaInsert);
route.post('/usuario', multer(config).single('foto'), cadastro.usuarioInsert);

module.exports = route