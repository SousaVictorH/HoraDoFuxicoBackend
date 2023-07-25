const { Tokens } = require('./models')

const { ServerError } = require('../helpers/httpResponse')
const { failedToCreateToken, failedToReadToken } = require('../helpers/messages')

const { objects } = require('../utils/index')

const source = 'Tokens Database'

const create = async (data) => {
  try {
    return await Tokens.create(data)
  } catch (error) {
    throw ServerError({ source, message: failedToCreateToken })
  }
}

const findOne = async (filters) => {
  try {
    objects.removeUndefinedParams(filters)

    return await Tokens.findOne(filters)
  } catch (error) {
    throw ServerError({ source, message: failedToReadToken })
  }
}

const deleteOne = async (filters) => {
  try {
    objects.removeUndefinedParams(filters)

    await Tokens.deleteOne(filters)
  } catch (error) {
    throw ServerError({ source, message: failedToReadToken })
  }
}

module.exports = {
  create,
  findOne,
  deleteOne
}
