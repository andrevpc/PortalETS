const { Sequelize } = require("sequelize");
const { pagInicialGet } = require("./home");
const usuario = require("../model/usuario");
const materia = require("../model/materia");

module.exports = {
    async validaUsuario(req, res) {
        
        const user = await usuario.findOne({ where : {usuario : req.body.userName, senha: req.body.password }});

        if (user)
        {
            const usuarios = await usuario.findByPk(user.idUsuario, {
                raw: true,
                attributes: ['idUsuario', 'nome', 'foto', 'isAdm']
            })
    
            const materias = await materia.findAll({
                raw: true,
                attributes: ['idMateria', 'materia', 'foto', 'conteudo']
            })
            res.cookie('userId', user.idUsuario)
            res.render('../views/main', {usuarios, materias})
        }
        else    
            res.render("./index", { error: true });
    }
};
