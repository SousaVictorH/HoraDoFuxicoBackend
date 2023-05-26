const Users = require('./models/Users')
const { UserModel } = require('../domain/models/index')

const { serverError, badRequest } = require('../helpers/httpResponse')
const {
  userAlreadyExist,
  failedToCreateUser,
  failedToReadUser
} = require('../helpers/messages')

const { objects } = require('../utils/index')

const source = 'UsersDatabase - createUser'

const create = async (user) => {
  if (await read({ phoneNumber: user.phoneNumber })) {
    // If user already exist throw bad request error
    throw badRequest({ source, message: userAlreadyExist })
  }

  try {
    // Else try to create new user
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

// async update(filters, toUpdate) {
//   try {
//     await Users.updateOne(filters, toUpdate, { new: true })
//   } catch (error) {
//     throw error;
//   }
// }