const moment = require('moment')

const UserService = require('../../services/UserService')
const TokenService = require('../../services/TokenService')

const { UserModel } = require('../../domain/models')

const { NotFound, Unauthorized } = require('../../helpers/httpResponse')
const { userNotFound, unauthorized, invalidToken } = require('../../helpers/messages')

const { generateToken } = require('../../helpers/token')

const source = 'Login - Use Case'

const Login = async ({ phoneNumber, token }) => {
  const user = await UserService.findOne({ phoneNumber })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  const tokenData = await TokenService.findOne({ userId: user.id })

  if (!tokenData || moment().isAfter(token.expiration)) {
    throw Unauthorized({ source, message: unauthorized })
  }

  // validate token
  if (token !== tokenData.token) {
    throw Unauthorized({ source, message: invalidToken })
  }

  await TokenService.deleteOne({ _id: tokenData.id })

  const User = UserModel(user)

  return {
    token: generateToken({ userId: User.id }),
    ...User
  }
}

module.exports = Login
