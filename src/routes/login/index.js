const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

router.post('/', UsersController.login)

module.exports = router
