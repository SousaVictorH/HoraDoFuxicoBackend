const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateToken } = require('../../middlewares')

router.get('', validateToken, UsersController.find)

module.exports = router
