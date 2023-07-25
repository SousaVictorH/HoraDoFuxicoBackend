const moment = require('moment')

const UserService = require('../../services/UserService')

const Login = require('./Login')

const { NotFound } = require('../../helpers/httpResponse')
const { userAlreadyExist } = require('../../helpers/messages')

const source = 'Sign Up - Use Case'

const SignUp = async (userData) => {
  if (await UserService.findOne({ phoneNumber: userData.phoneNumber })) {
    // If user already exist throw not found error
    throw NotFound({ source, message: userAlreadyExist })
  }

  const { phoneNumber } = await UserService.create({
    ...userData,
    birthDate: moment(userData.birthDate, 'DD/MM/YYYY')
  })

  return Login({ phoneNumber, token: null, authorized: true })
}

module.exports = SignUp
