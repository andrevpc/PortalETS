const materia = require("../model/materia");
const usuario = require("../model/usuario");

module.exports = {
    async main(req, res) {
        const parametro = req.params.id
        const usuarios = await usuario.findByPk(parametro, {
            raw: true,
            attributes: ['idUsuario', 'nome', 'foto', 'isAdm']
        })

        const materias = await materia.findAll({
            raw: true,
            attributes: ['idMateria', 'materia', 'foto']
        })
        res.render('../views/main', {usuarios, materias})
    }
}