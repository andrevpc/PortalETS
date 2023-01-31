const competencia = require('../model/competencia')
const conteudo = require('../model/conteudo')
const materia = require('../model/materia')
const usuario = require('../model/usuario')

module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index', {error: false})
    }
    }