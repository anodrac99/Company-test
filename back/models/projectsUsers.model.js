const { db, DataTypes } = require('../utils/db.utils')

const ProjectsUser = db.define('projectsUser', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProject: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = { ProjectsUser }