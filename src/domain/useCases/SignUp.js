const moment = require('moment')

const UserService = require('../../services/UserService')

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

  return UserModel(await UserService.create(User))
}

module.exports = SignUp
