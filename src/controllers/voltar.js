const usuario = require("../model/usuario");
const materia = require("../model/materia");

module.exports = {
    async retorna(req, res) {
        var parametro = req.headers.cookie
        parametro = parametro.replace(/^\D+/g, '')
        const usuarios = await usuario.findOne({ where : {idUsuario : parametro }});

        const materias = await materia.findAll({
            raw: true,
            attributes: ['idMateria', 'materia', 'foto', 'conteudo']
        })
        res.cookie('userId', usuarios.idUsuario)
        res.render('../views/main', {usuarios, materias})
    }
    
};
