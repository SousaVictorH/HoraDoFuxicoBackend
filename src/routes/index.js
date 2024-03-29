const router = require('express').Router()

const singup = require('./signup')
const login = require('./login')
const user = require('./user')
const schedule = require('./schedule')
const notify = require('./notify')

// RETURNS API VERSION
router.get('/', (_, res) => {
  return res.status(200).send('API V 1.0')
})

router.use('/signup', singup)
router.use('/login', login)
router.use('/user', user)
router.use('/schedule', schedule)
router.use('/notify', notify)

module.exports = router
