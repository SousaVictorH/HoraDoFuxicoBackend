const UserService = require('../../services/UserService')

const GetUsersPage = async ({ page, limit, search }) => {
  return await UserService.getPage({
    page,
    limit,
    search
  })
}

module.exports = GetUsersPage
