const { Sequelize } = require("sequelize")
const database = require('../config/db')
const materia = database.define('Materia',{
    idMateria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    materia: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING(100),
    }
})

module.exports = materia