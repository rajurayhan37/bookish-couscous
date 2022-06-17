const userController = require('../controllers/user.controller')
const router =  require('express').Router()


router.post('/add-user', userController.adduser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router;