const UserService = require('../../services/UserService')
const TokenService = require('../../services/TokenService')

const { TokenModel } = require('../models')

const { NotFound } = require('../../helpers/httpResponse')
const { userNotFound } = require('../../helpers/messages')

const source = 'Login - Use Case'

const RequestLogin = async ({ phoneNumber }) => {
  const user = await UserService.findOne({ phoneNumber })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  const userId = user.id

  if (await TokenService.findOne({ userId })) {
    // If token already exist, delete it
    await TokenService.deleteOne({ userId })
  }

  const token = TokenModel({
    token: (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1),
    userId
  })

  await TokenService.create(token)
}

module.exports = RequestLogin
