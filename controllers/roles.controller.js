const db =  require('../models');
const User = require('../models/user.model')

//create main Role model
const Role = db.roles

//main scope
//add Role

const addRole = async (req, res) => {

    let info = {
        title: req.body.title,
        slug: req.body.slug,
    }

    const role =  await Role.create(info)
    res.status(200).send(role)
}

//get all Roles

const getAllRoles =  async (req, res) => {

    // for specific field
    // let roles = await Role.findAll({
    //     attributes: [
    //         'title',
    //         'slug'
    //     ]
    // })

    let roles = await Role.findAll()

    res.status(200).send(roles)
}


//get single Role

const getOneRole =  async (req, res) => {

    let id = req.params.id
    let role = await Role.findOne({ where: { id: id }})

    res.status(200).send(role)
} 


//update Role

const updateRole =  async (req, res) => {

    let id = req.params.id
    const role = await Role.update(req.body, { where: { id: id}})

    res.status(200).send(role)
} 

//delete Role

const deleteRole =  async (req, res) => {

    let id = req.params.id
    await Role.destroy({ where: { id: id}})

    res.status(200).send('Role delete successfully!')
} 


module.exports = {
    addRole,
    getAllRoles,
    getOneRole,
    updateRole,
    deleteRole,
}