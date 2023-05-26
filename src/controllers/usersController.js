const { UserModel } = require('../domain/models/index')
const userService = require('../services/userService')

module.exports = {
  async login(req, res) {
    return res.send("ok")
  },
  async signUp(req, res) {
    try {
      const UserData = req.body

      const User = UserModel(UserData)

      const CreatedUser = await userService.create(User)

      return res.status(201).json({
        ...CreatedUser
      })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error);
    }
  }
}