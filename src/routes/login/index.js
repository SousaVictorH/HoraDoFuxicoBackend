const router = require('express').Router()

const { login } = require('../../controllers/usersController')

router.post('/', login)

module.exports = router
