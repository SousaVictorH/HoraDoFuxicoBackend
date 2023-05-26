const router = require('express').Router()

const { signUp } = require('../../controllers/usersController')

const validateMiddleware = require('../../middlewares')
const signUpSchema = require('../../middlewares/signUp')

router.post('/', validateMiddleware(signUpSchema), signUp)

module.exports = router
