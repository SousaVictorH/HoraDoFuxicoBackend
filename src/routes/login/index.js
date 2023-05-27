const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateMiddleware } = require('../../middlewares')
const loginSchema = require('../../middlewares/login')

router.post('/', validateMiddleware(loginSchema), UsersController.login)

module.exports = router
