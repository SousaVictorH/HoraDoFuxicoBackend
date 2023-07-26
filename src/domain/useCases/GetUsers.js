const UserService = require('../../services/UserService')

const GetUsers = async ({ page, limit, search }) => {
  return await UserService.getUsers({
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    search: search || ''
  })
}

module.exports = GetUsers
