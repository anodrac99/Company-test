const { DataTypes, Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '', //contraseña
    port: 5432,
    logging: false,
    database: 'companydb' //nombre DB
})

module.exports = { DataTypes, db }