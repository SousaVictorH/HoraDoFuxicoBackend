const UsersDatabase = require('../databases/UsersDatabase')

const create = async (user) => {
  return await UsersDatabase.create(user)
}

const findOne = async (filters = { _id, phoneNumber }) => {
  return await UsersDatabase.findOne(filters)
}

const update = async (filters = { _id, phoneNumber }, userData) => {
  await UsersDatabase.update(filters, userData)
}

module.exports = {
  create,
  findOne,
  update
}