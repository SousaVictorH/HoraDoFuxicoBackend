const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateToken, validateMiddleware } = require('../../middlewares')
const signUpSchema = require('../../middlewares/signUp')

router.post('', validateToken, validateMiddleware(signUpSchema), UsersController.signUp)

module.exports = router
