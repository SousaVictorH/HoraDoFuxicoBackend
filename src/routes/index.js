const router = require('express').Router()

const singup = require('./signup')
const login = require('./login')

// RETURNS API VERSION
router.get('/', (_, res) => {
  return res.status(200).send('API V 1.0')
})

router.use('/signup', singup)
router.use('/login', login)

module.exports = router
