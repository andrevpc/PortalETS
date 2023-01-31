const competencia = require('../model/competencia')
const conteudo = require('../model/conteudo')
const materia = require('../model/materia')
const usuario = require('../model/usuario')

module.exports = {
    async aulas(req, res){
        const parametro = req.params.id
        const parametro2 = req.params.materia

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

        
        const competencias_necessitadas = competencias.competencias.split(',')
        console.log(competencias.competencias)
        console.log(materias.conteudo)
        const conteudos_da_materia = materias.conteudo.split(',')
        console.log(conteudos_da_materia.includes(conteudos_da_materia[1]))

        res.render('../views/aulas', {usuarios, materias, competencias, conteudos, competencias_necessitadas, conteudos_da_materia})
    }
    }