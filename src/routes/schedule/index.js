const router = require('express').Router()

const ScheduleController = require('../../controllers/ScheduleController')

const { validateToken, validateMiddleware } = require('../../middlewares')
const ScheduleSchema = require('../../middlewares/schedule')

router.post('/:id', validateToken, validateMiddleware(ScheduleSchema), ScheduleController.create)

module.exports = router
