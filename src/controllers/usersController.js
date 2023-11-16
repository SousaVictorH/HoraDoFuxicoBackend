const {
  Login,
  RequestLogin,
  UpdateUser,
  SignUp,
  GetUsersPage,
  SocialLogin,
  VerifyUser
} = require('../domain/useCases')

module.exports = {
  async login(req, res) {
    try {
      const { phoneNumber, token } = req.body

      return res.status(200).json(await Login({ phoneNumber, token }))
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
      const {
        socialId,
        name,
        birthDate,
        phoneNumber,
        avatar
      } = req.body

      return res.status(201).json(await SignUp({ socialId, name, birthDate, phoneNumber, avatar }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const {
        name,
        birthDate,
        phoneNumber,
        avatar,
      } = req.body

      const user = await UpdateUser({ id, userData: { name, birthDate, phoneNumber, avatar } })

      return res.status(204).json(user)
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async getPage(req, res) {
    try {
      const { page, limit, search } = req.query

      const usersPage = await GetUsersPage({
        page: Number(page) || 1,
        limit: Number(limit) || 10,
        search: search || ''
      })

      return res.status(200).json(usersPage)
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async socialLogin(req, res) {
    try {
      const {
        id,
        name,
        avatar
      } = req.body

      return res.status(200).json(await SocialLogin({ id, name, avatar }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async verifyUser(req, res) {
    try {
      const { id } = req.body

      return res.status(200).json(await VerifyUser({ id }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  }
}
