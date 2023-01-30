const { Sequelize } = require("sequelize");
const usuario = require("../model/usuario");
const { pagInicialGet } = require("./home");

module.exports = {
    async validaUsuario(req, res) {
        
        const user = await usuario.findOne({ attributes: ["idUsuario"], where : {usuario : req.query.userName, senha: req.query.password }});

        console.log(user.idUsuario)
        console.log(user)

        const page = "/main/" + user.idUsuario;

        console.log(page)

        if (user)
            res.redirect(page)
    }
};
