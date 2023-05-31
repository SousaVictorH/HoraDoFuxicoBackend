const {
  Login,
  RequestLogin,
  Update,
  SignUp
} = require('../domain/useCases')

module.exports = {
  async login(req, res) {
    try {
      const { phoneNumber, token } = req.body

      const UserData = await Login({ phoneNumber, token })

      return res.status(200).json({
        ...UserData
      })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async requestLogin(req, res) {
    try {
      const { phoneNumber } = req.params

      await RequestLogin({ phoneNumber })

      return res.status(204).json()
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async signUp(req, res) {
    try {
      const UserData = req.body

      const CreatedUser = await SignUp(UserData)

      return res.status(201).json({
        ...CreatedUser
      })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const userData = req.body

      const user = await Update({ id, userData })

      return res.status(200).json({ ...user })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  }
}