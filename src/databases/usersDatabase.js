const Users = require('./models/Users')
const { UserModel } = require('../domain/models/index')

const { serverError } = require('../helpers/httpResponse')
const {
  failedToCreateUser,
  failedToReadUser
} = require('../helpers/messages')

const { objects } = require('../utils/index')

const source = 'Users Database - createUser'

const create = async (user) => {
  try {
    return UserModel(await Users.create(user))
  } catch (error) {
    throw serverError(source, failedToCreateUser)
  }
}

const read = async (filters = { id, phoneNumber }) => {
  try {
    objects.removeUndefinedParams(filters)

    return await Users.findOne(filters)
  } catch (error) {
    throw serverError(source, failedToReadUser)
  }
}

module.exports = {
  create,
  read
}
