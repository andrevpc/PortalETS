const express = require('express')
const route = express.Router()
const home = require('./src/controllers/home')
route.get('/', home.pagInicialGet)

//Registro
const cadastro = require('./src/controllers/cadastro')
route.get('/registro', cadastro.registro)
route.post('/competencia', cadastro.competenciaInsert)

//Multer (controle de imagens)
const multer = require("multer");
const config = require('./src/config/multer');
route.post('/materia', multer(config).single('foto'), cadastro.materiaInsert);
route.post('/usuario', multer(config).single('foto'), cadastro.usuarioInsert);
route.post('/conteudo', multer(config).single('arquivopasta'), cadastro.conteudoInsert);

module.exports = route