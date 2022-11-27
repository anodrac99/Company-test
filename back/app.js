const express = require('express')

const cors = require('cors')

//routes
const { usersRouter } = require('./routes/users.routes')
const { projectsRouter } = require('./routes/projects.routes')
const { projectUserRouter } = require('./routes/projectUser.routes')

const app = express()

const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/users', usersRouter)
app.use('/projects', projectsRouter)
app.use('/userinproject', projectUserRouter)

module.exports = {app}