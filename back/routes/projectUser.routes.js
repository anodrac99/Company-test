const express = require('express')

const projectUserRouter = express.Router()

//controller
const { addUserToProject } = require('../controllers/projectUser.controller')

projectUserRouter.post('/', addUserToProject)

module.exports = { projectUserRouter }