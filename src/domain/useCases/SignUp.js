const moment = require('moment')

const UserService = require('../../services/UserService')

const Login = require('./Login')

const { UserModel } = require('../../domain/models')

const { NotFound } = require('../../helpers/httpResponse')
const { userAlreadyExist } = require('../../helpers/messages')

const source = 'Sign Up - Use Case'

const SignUp = async (user) => {
  const User = UserModel({
    ...user,
    dateOfBirth: moment(user.dateOfBirth, 'DD/MM/YYYY')
  })

  if (await UserService.findOne({ phoneNumber: User.phoneNumber })) {
    // If user already exist throw not found error
    throw NotFound({ source, message: userAlreadyExist })
  }

  const { phoneNumber } = UserModel(await UserService.create(User))

  return Login({ phoneNumber, token: null, authorized: true })
}

module.exports = SignUp
