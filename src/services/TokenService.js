const TokensDatabase = require('../databases/TokensDatabase')

const create = async (data) => {
  return await TokensDatabase.create(data)
}

const findOne = async (filters = { userId }) => {
  return await TokensDatabase.findOne(filters)
}

const deleteOne = async (filters = { userId }) => {
  return await TokensDatabase.deleteOne(filters)
}

module.exports = {
  create,
  findOne,
  deleteOne
}