const router = require('express').Router()

const ScheduleController = require('../../controllers/ScheduleController')

const { validateToken, validateMiddleware } = require('../../middlewares')
const ScheduleSchema = require('../../middlewares/schedule')

router.get('/:id', validateToken, ScheduleController.getPage)
router.post('/:id', validateToken, validateMiddleware(ScheduleSchema), ScheduleController.create)
router.get('/details/:id', validateToken, ScheduleController.getDetails)

router.put('/make', validateToken, ScheduleController.schedule)
router.put('/cancel', validateToken, ScheduleController.cancel)

module.exports = router
