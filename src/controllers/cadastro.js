const competencia = require("../model/competencia");
const conteudo = require("../model/conteudo");
const materia = require("../model/materia");
const usuario = require("../model/usuario");

module.exports = {
  async registro(req, res) {
    const usuarios = await usuario.findAll({
      raw: true,
      attributes: ["idUsuario", "nome", "foto", "isAdm"],
    });
    const materias = await materia.findAll({
      raw: true,
      attributes: ["idMateria", "materia"],
    });
    res.render("../views/registro", { usuarios, materias });
  },

  async competenciaInsert(req, res) {
    const dados = req.body;

    await competencia.create({
      nota: dados.nota,
      competencia: dados.competencia,
      usuario: dados.usuario,
      materia: dados.materia,
    });
    res.redirect("/");
  },

  async conteudoInsert(req, res) {
    const dados = req.body;
    let pasta = "";
    if (req.file) {
      pasta = req.file.filename;
    }
    await conteudo.create({
      conteudo: dados.conteudo,
      pasta: pasta,
    });
    res.redirect("/");
  },

  async materiaInsert(req, res) {
    const dados = req.body;

    let foto = "user.png";
    if (req.file) {
      foto = req.file.filename;
    }

    await materia.create({
      materia: dados.materia,
      foto: foto
    });
    res.redirect("/");
  },

  async usuarioInsert(req, res) {
    const dados = req.body;

    let foto = "user.png";
    if (req.file) {
      foto = req.file.filename;
    }
    await usuario.create({
      nome: dados.nome,
      foto: foto,
      usuario: dados.usuario,
      senha: dados.senha,
      isAdm: dados.isAdm,
    });
    res.redirect("/");
  },
};