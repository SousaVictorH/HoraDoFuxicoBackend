const Users = require('./models/Users')
const { UserModel } = require('../domain/models/index')

const { ServerError } = require('../helpers/httpResponse')
const {
  failedToCreateUser,
  failedToReadUser,
  failedToUpdateUser
} = require('../helpers/messages')

const { objects } = require('../utils/index')

const source = 'Users Database - createUser'

const create = async (user) => {
  try {
    return UserModel(await Users.create(user))
  } catch (error) {
    throw ServerError({ source, message: failedToCreateUser })
  }
}

const findOne = async (filters) => {
  try {
    objects.removeUndefinedParams(filters)

    return await Users.findOne(filters)
  } catch (error) {
    throw ServerError({ source, message: failedToReadUser })
  }
}

const update = async (filters, userData) => {
  try {
    objects.removeUndefinedParams(filters)

    await Users.updateOne(filters, {
      ...userData,
      updated: Date.now()
    })
  } catch (error) {
    throw ServerError({ source, message: failedToUpdateUser })
  }
}

module.exports = {
  create,
  findOne,
  update
}
