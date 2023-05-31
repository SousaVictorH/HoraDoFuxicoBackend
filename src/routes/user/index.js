const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const { validateMiddleware, validateToken } = require('../../middlewares')
const updateSchema = require('../../middlewares/update')

router.put('/:id', validateToken, validateMiddleware(updateSchema), UsersController.update)

module.exports = router