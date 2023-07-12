const TokensDatabase = require('../databases/TokensDatabase')

const create = async (data) => {
  return await TokensDatabase.create(data)
}

const findOne = async (filters = { userId, phoneNumber }) => {
  return await TokensDatabase.findOne(filters)
}

const deleteOne = async (filters = { _id, phoneNumber }) => {
  return await TokensDatabase.deleteOne(filters)
}

module.exports = {
  create,
  findOne,
  deleteOne
}