const TokensDatabase = require('../databases/TokensDatabase')

const { TokenModel } = require('../domain/models')

const create = async (data) => {
  const Token = TokenModel(data)

  return TokenModel(await TokensDatabase.create(Token))
}

const findOne = async (filters = { userId, phoneNumber }) => {
  const token = await TokensDatabase.findOne(filters)

  if (!token) return null

  return TokenModel(token)
}

const deleteOne = async (filters = { _id, phoneNumber }) => {
  await TokensDatabase.deleteOne(filters)
}

module.exports = {
  create,
  findOne,
  deleteOne
}