const UsersDatabase = require('../databases/UsersDatabase')

const { BadRequest } = require('../helpers/httpResponse')

const { userAlreadyExist } = require('../helpers/messages')

const source = 'Users Service - createUser'

const create = async (user) => {
  if (await UsersDatabase.findOne({ phoneNumber: user.phoneNumber })) {
    // If user already exist throw bad request error
    throw BadRequest({ source, message: userAlreadyExist })
  }

  return await UsersDatabase.create(user)
}

module.exports = {
  create
}