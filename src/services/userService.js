const UsersDatabase = require('../databases/UsersDatabase')

const { UserModel } = require('../domain/models')

const create = async (user) => {
  const User = UserModel(user)

  return UserModel(await UsersDatabase.create(User))
}

const findOne = async (filters = { _id, phoneNumber }) => {
  const user = await UsersDatabase.findOne(filters)

  if (!user) return null

  return UserModel(user)
}

const update = async (filters = { _id, phoneNumber }, userData) => {
  const User = UserModel(userData)

  return UserModel(await UsersDatabase.update(filters, User))
}

const getPage = async ({ page, limit, search }) => {
  const { users, total } = await UsersDatabase.getPage({ page, limit, search })

  return {
    users: users.map((user) => UserModel(user)),
    numberOfPages: Math.ceil(total / limit)
  }
}

module.exports = {
  create,
  findOne,
  update,
  getPage
}