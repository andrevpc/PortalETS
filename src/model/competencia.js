const { Sequelize } = require("sequelize")
const database = require('../config/db')
const usuario = require("./usuario")
const materia = require('./materia')
const competencia = database.define('Competencia',{
    idCompetencia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nota: {
        type: Sequelize.FLOAT,
        allowNull:false
    },
    competencias: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

module.exports = competencia

competencia.belongsTo(usuario, {
    constraint: true,
    foreignKey: 'idUsuario'
})

competencia.belongsTo(materia, {
    constraint: true,
    foreignKey: 'idMateria'
})