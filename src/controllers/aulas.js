const competencia = require('../model/competencia')
const conteudo = require('../model/conteudo')
const materia = require('../model/materia')
const usuario = require('../model/usuario')

module.exports = {
    async aulas(req, res){
        var parametro = req.headers.cookie
        parametro = parametro.replace(/^\D+/g, '')
        var parametro2 = req.params.materia

        const usuarios = await usuario.findByPk(parametro, {
            raw: true,
            attributes: ['idUsuario', 'nome', 'foto']
        })
        const materias = await materia.findByPk(parametro2, {
            raw: true,
            attributes: ['idMateria', 'materia', 'foto', 'conteudo']
        })
        
        const competencias = await competencia.findOne({
            raw: true,
            attributes: ['idCompetencia', 'nota', 'competencias'],
            where: {
                idUsuario : usuarios.idUsuario,
                idMateria : materias.idMateria
            }
        })

        
        const conteudos = await conteudo.findAll({
            raw: true,
            attributes: ['idConteudo', 'conteudo', 'pasta', 'dia'],
            where: {
                idMateria : materias.idMateria
            }
        })

        const filtro = req.body.filtro_conteudo
        const filtro_dia0 = req.body.dia
        const filtro_dia = req.body.data2
        console.log(filtro_dia0)
        
        const competencias_necessitadas = competencias.competencias.split(',')
        const conteudos_da_materia = materias.conteudo.split(',')

        res.render('../views/aulas', {usuarios, materias, competencias, conteudos, competencias_necessitadas, conteudos_da_materia, filtro, filtro_dia0, filtro_dia})
    },
    
    async aulasPost(req, res){
        var parametro = req.headers.cookie
        parametro = parametro.replace(/^\D+/g, '')
        var parametro2 = req.params.materia
        
        const usuarios = await usuario.findByPk(parametro, {
            raw: true,
            attributes: ['idUsuario', 'nome', 'foto']
        })
        const materias = await materia.findByPk(parametro2, {
            raw: true,
            attributes: ['idMateria', 'materia', 'foto', 'conteudo']
        })
        
        const competencias = await competencia.findOne({
            raw: true,
            attributes: ['idCompetencia', 'nota', 'competencias'],
            where: {
                idUsuario : usuarios.idUsuario,
                idMateria : materias.idMateria
            }
        })
        
        
        const conteudos = await conteudo.findAll({
            raw: true,
            attributes: ['idConteudo', 'conteudo', 'pasta', 'dia'],
            where: {
                idMateria : materias.idMateria
            }
        })

        filtro = (typeof req.body.filtro_conteudo !== 'undefined') ? req.body.filtro_conteudo : ((typeof filtro !== 'undefined')? filtro : req.body.filtro_conteudo)
        filtro_dia0 = (typeof req.body.data !== 'undefined') ? req.body.data : ((typeof filtro_dia0 !== 'undefined')? filtro_dia0 : req.body.data)
        filtro_dia = (typeof req.body.data2 !== 'undefined') ? req.body.data2 : ((typeof filtro_dia !== 'undefined')? filtro_dia : req.body.data2)
        
        const competencias_necessitadas = competencias.competencias.split(',')
        const conteudos_da_materia = materias.conteudo.split(',')

        res.render('../views/aulas', {usuarios, materias, competencias, conteudos, competencias_necessitadas, conteudos_da_materia, filtro, filtro_dia0, filtro_dia})
    }
}