const UserService = require('../../services/UserService')

const FindAll = async ({ page, limit, search }) => {
  return await UserService.findAll({
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    search: search || ''
  })
}

module.exports = FindAll
