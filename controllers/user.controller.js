const db =  require('../models');

//create main Model
const User = db.users
const Role = db.roles

//main scope
//add user

const adduser = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    }

    const user =  await User.create(info)
    res.status(200).send(info)
}

//get all users

const getAllUsers =  async (req, res) => {

    // for specific field
    // let users = await User.findAll({
    //     attributes: [
    //         'name',
    //         'email'
    //     ]
    // })

    let users = await User.findAll()

    res.status(200).send(users)
}


//get single user

const getOneUser =  async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})

    res.status(200).send(user)
} 


//update user

const updateUser =  async (req, res) => {

    let id = req.params.id
    const user = await User.update(req.body, { where: { id: id}})

    res.status(200).send(user)
} 

//delete user

const deleteUser =  async (req, res) => {

    let id = req.params.id
    await User.destroy({ where: { id: id}})

    res.status(200).send('User delete successfully!')
} 



module.exports = {
    adduser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}