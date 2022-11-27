const { Projects } = require('../models/projects.model')
const { ProjectsUser } = require('../models/projectsUsers.model')
const { User } = require('../models/users.model')

const getProjects = async (req, res) => {
    const data = await Projects.findAll({
        //include:  [{model: ProjectsUser, include: { model: User }}]
    })

    res.status(200).json({
        data
    })
}

const getProjectById = async (req, res) => {
    const {id} = req.params
    
    const project = await Projects.findOne({
        where: {id},
        // include:  [{model: ProjectsUser, include: { model: User }}]
    })

    res.status(200).json({
        project
    })
}

const addProject = async (req, res) => {
    const {projectName} = req.body

    await Projects.create({
        projectName
    })

    res.status(201).json()
}

module.exports = { getProjects, getProjectById, addProject }