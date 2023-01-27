const { Sequelize } = require("sequelize");
const usuario = require("../model/usuario");

module.exports = {
  async validaUsuario(req, res) {
    const user = await usuario.findOne({ where : {nome : req.body.user, senha: req.body.password }});

    if (user)
    {
        res.render("../views/aulas")
    }
    else
        res.status(404).json({ error: "Usuário e/ou senha incorretos"});
  }
};
