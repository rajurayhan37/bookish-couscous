//import controllers role, user
const roleController = require('../controllers/roles.controller')
const router =  require('express').Router()

//use routes
router.post('/add-role', roleController.addRole)
router.get('/', roleController.getAllRoles)
router.get('/:id', roleController.getOneRole)
router.put('/:id', roleController.updateRole)
router.delete('/:id', roleController.deleteRole)


module.exports = router;