const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateMiddleware } = require('../../middlewares')
const loginSchema = require('../../middlewares/login')

router.post('/', validateMiddleware(loginSchema), UsersController.login)
router.post('/request/:phoneNumber', UsersController.requestLogin)

module.exports = router
