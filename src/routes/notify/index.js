const router = require('express').Router()

const NotificationsController = require('../../controllers/NotificationsController')

router.post('', NotificationsController.notifyAll)

module.exports = router
