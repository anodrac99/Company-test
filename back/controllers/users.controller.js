const { User } = require('../models/users.model')
const { Projects } = require('../models/projects.model')
const { ProjectsUser } = require('../models/projectsUsers.model')

const getUsers = async (req, res) => {
    const data = await User.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"]},
        include:  [{model: ProjectsUser, attributes:{exclude: ["createdAt", "updatedAt"]}, include: { model: Projects }}]
    })

    res.status(200).json({
        data
    })
}

const getuserById = async ( req, res) => {
    const { id } = req.params 

    const user = await User.findOne ({
        where: {id},
        include:  [{model: ProjectsUser, include: { model: Projects }}]
    });
    
    res.status(200).json({
        user
    })
}

const createUser = async ( req, res) => {
    const {name, role, imgUrl} = req.body

    await User.create ({name,role,imgUrl})

    res.status(201).json( )
}
module.exports = { getUsers, getuserById, createUser }