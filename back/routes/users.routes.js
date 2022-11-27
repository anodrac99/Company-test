const express = require('express')

const usersRouter = express.Router()

//controllers
const { getUsers, createUser, getuserById } = require('../controllers/users.controller')

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getuserById)
usersRouter.post('/', createUser)

module.exports = {usersRouter} 