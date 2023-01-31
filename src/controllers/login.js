const { Sequelize } = require("sequelize");
const usuario = require("../model/usuario");
const { pagInicialGet } = require("./home");

module.exports = {
    async validaUsuario(req, res) {
        
        const user = await usuario.findOne({ where : {usuario : req.body.userName, senha: req.body.password }});

        if (user)
            res.redirect("/main/" + user.idUsuario)
        else    
            res.render("./index", {error: true});
    }
};
