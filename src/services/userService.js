const usersDatabase = require('../databases/usersDatabase')

const { badRequest } = require('../helpers/httpResponse')

const { userAlreadyExist } = require('../helpers/messages')

const source = 'Users Service - createUser'

const create = async (user) => {
  if (await usersDatabase.read({ phoneNumber: user.phoneNumber })) {
    // If user already exist throw bad request error
    throw badRequest({ source, message: userAlreadyExist })
  }

  return await usersDatabase.create(user)
}

module.exports = {
  create
}