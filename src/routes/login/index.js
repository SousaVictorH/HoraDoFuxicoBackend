const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateMiddleware } = require('../../middlewares')
const loginSchema = require('../../middlewares/login')
const socialLoginSchema = require('../../middlewares/socialLogin')

router.post('', validateMiddleware(loginSchema), UsersController.login)
router.post('/request/:phoneNumber', UsersController.requestLogin)

router.post('/social', validateMiddleware(socialLoginSchema), UsersController.socialLogin)

module.exports = router
