const moment = require('moment')

const UserService = require('../../services/UserService')
const TokenService = require('../../services/TokenService')

const { UserModel } = require('../../domain/models')

const { Unauthorized } = require('../../helpers/httpResponse')
const { unauthorized, invalidToken } = require('../../helpers/messages')

const { generateToken } = require('../../helpers/token')

const source = 'Login - Use Case'

const Login = async ({ phoneNumber, token, authorized = false }) => {
  if (!authorized) {
    const tokenData = await TokenService.findOne({ phoneNumber })

    if (!tokenData || moment().isAfter(token.expiration)) {
      throw Unauthorized({ source, message: unauthorized })
    }

    // validate token
    if (token !== tokenData.token) {
      throw Unauthorized({ source, message: invalidToken })
    }

    await TokenService.deleteOne({ _id: tokenData.id })
  }

  const user = await UserService.findOne({ phoneNumber })

  if (!user) return {}

  const User = UserModel(user)

  return {
    token: generateToken({ phoneNumber }),
    ...User
  }
}

module.exports = Login
