const { ProjectsUser } = require('../models/projectsUsers.model')

const addUserToProject = async (req, res) => {
    const { idUser, idProject } = req.body

    await ProjectsUser.create({
        idUser,
        idProject
    })

    res.status(201).json({
        status: "success",
        message: "The user was added"
    })
}

module.exports = { addUserToProject }