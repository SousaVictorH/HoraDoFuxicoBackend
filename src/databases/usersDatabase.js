const { Users } = require('./models')

const { ServerError } = require('../helpers/httpResponse')
const {
  failedToCreateUser,
  failedToReadUser,
  failedToUpdateUser
} = require('../helpers/messages')

const { objects } = require('../utils/index')

const source = 'Users Database'

const create = async (user) => {
  try {
    return await Users.create(user)
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

    return await Users.findOneAndUpdate(filters, {
      ...userData,
      updatedAt: Date.now()
    }, { returnDocument: 'after' })
  } catch (error) {
    throw ServerError({ source, message: failedToUpdateUser })
  }
}

const find = async ({ page, limit, search }) => {
  try {
    const users = await Users.find({ name: { $regex: search, $options: "i" } })
      .skip((page - 1) * limit)
      .limit(limit)

    const total = await Users.countDocuments({
      name: { $regex: search, $options: "i" }
    })

    return {
      users,
      total
    }
  } catch (error) {
    throw ServerError({ source, message: failedToUpdateUser })
  }
}

module.exports = {
  create,
  findOne,
  update,
  find
}
