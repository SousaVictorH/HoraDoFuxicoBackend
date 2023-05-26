const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const validateMiddleware = require('../../middlewares')
const signUpSchema = require('../../middlewares/signUp')

router.post('/', validateMiddleware(signUpSchema), UsersController.signUp)

module.exports = router
