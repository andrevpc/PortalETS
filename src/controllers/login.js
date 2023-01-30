const { Sequelize } = require("sequelize");
const usuario = require("../model/usuario");
const { pagInicialGet } = require("./home");

module.exports = {
    async validaUsuario(req, res) {
        console.log(req.body.userName);
        const user = await usuario.findOne({ where : {usuario : req.body.userName, senha: req.body.password }});

        if (user)
            res.render("../views/main/" + user.idUsuario)
    }
};
