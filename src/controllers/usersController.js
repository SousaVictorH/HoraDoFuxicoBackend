const { UserModel } = require('../domain/models/index')
const { create } = require('../databases/usersDatabase')

module.exports = {
  async login(req, res) {
    return res.send("ok")
  },
  async signUp(req, res) {
    try {
      const UserData = req.body

      const User = UserModel(UserData)

      const CreatedUser = await create(User)

      return res.status(201).json({
        ...CreatedUser
      })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error);
    }
  }
}