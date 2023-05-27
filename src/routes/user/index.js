const router = require('express').Router()

const UsersController = require('../../controllers/UsersController')

const validateMiddleware = require('../../middlewares')
const updateSchema = require('../../middlewares/update')

router.put('/:id', validateMiddleware(updateSchema), UsersController.update)

module.exports = router
