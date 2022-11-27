const { Projects } = require('../models/projects.model')
const { User } = require('../models/users.model')
const { ProjectsUser } = require('../models/projectsUsers.model')

const initModels = () => {
    User.hasMany(ProjectsUser, {foreignKey: "idUser"})
    ProjectsUser.hasOne(User)

    Projects.hasMany(ProjectsUser, {foreignKey:"idProject"})
    ProjectsUser.hasOne(Projects, {foreignKey:"id"})
}

module.exports = { initModels }