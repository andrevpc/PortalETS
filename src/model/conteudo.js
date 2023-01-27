const { Sequelize } = require("sequelize")
const database = require('../config/db')
const materia = require('./materia')
const conteudo = database.define('Conteudo',{
    idConteudo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    conteudo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    pasta: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dia: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

module.exports = conteudo

conteudo.belongsTo(materia, {
    constraint: true,
    foreignKey: 'idMateria'
});