const UserService = require('../../services/UserService')

const { UserModel } = require('../../domain/models')

const { NotFound, Unauthorized } = require('../../helpers/httpResponse')
const { userNotFound, unauthorized } = require('../../helpers/messages')

const { generateToken } = require('../../helpers/token')

const source = 'Login - Use Case'

const Login = async ({ phoneNumber, token }) => {
  const user = await UserService.findOne({ phoneNumber })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  if (token !== '123456') {
    // Invalid Token
    throw Unauthorized({ source, message: unauthorized })
  }

  const User = UserModel(user)

  return {
    token: generateToken({ userId: User.id }),
    userData: {
      ...User
    }
  }
}

module.exports = Login
