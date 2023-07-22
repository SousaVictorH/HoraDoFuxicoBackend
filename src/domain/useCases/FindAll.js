const UserService = require('../../services/UserService')

const User = require('../models/user')

const FindAll = async ({ page, limit, search }) => {
  const { users, total } = await UserService.findAll({
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    search: search || ''
  })

  return {
    users: users.map((user) => User(user)),
    numberOfPages: Math.ceil(total / limit)
  }
}

module.exports = FindAll
