const express = require('express')

const projectsRouter = express.Router()

//controllers
const { getProjects, getProjectById, addProject } = require('../controllers/projects.controller')

projectsRouter.get('/', getProjects)
projectsRouter.get('/:id', getProjectById)
projectsRouter.post('/', addProject)

module.exports = { projectsRouter }