const { Sequelize } = require("sequelize")
const database = require('../config/db')
const usuario = database.define('Usuario',{
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull:false
    },
    foto: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    usuario: {
        type: Sequelize.STRING(50),
        allowNull:false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING(50),
        allowNull:false
    },
    isAdm: {
        type: Sequelize.BOOLEAN,
        allowNull:false
    }
})

module.exports = usuario