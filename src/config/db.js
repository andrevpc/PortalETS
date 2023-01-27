const sequelize = require('sequelize')
const database = new sequelize('portal_ets', 'andreETS', 'etsds10243110',
    {
        dialect: 'mssql', host: 'localhost', port: 1433
    })
database.sync()
module.exports = database