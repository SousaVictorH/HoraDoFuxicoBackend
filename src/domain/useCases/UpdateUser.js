const moment = require('moment')

const UserService = require('../../services/UserService')

const { NotFound, BadRequest } = require('../../helpers/httpResponse')
const { userNotFound, dataMalformed } = require('../../helpers/messages')

const { id: { validateId } } = require('../../utils')

const source = 'Update - Use Case'

const UpdateUser = async ({ id, userData }) => {
  if (!validateId(id)) {
    // Invalid Id
    throw BadRequest({ source, message: dataMalformed })
  }

  const user = await UserService.findOne({ _id: id })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  return await UserService.update({ _id: id }, {
    ...userData,
    birthDate: moment(userData.birthDate, 'DD/MM/YYYY')
  })
}

module.exports = UpdateUser
