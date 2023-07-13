const moment = require('moment')

const UserService = require('../../services/UserService')

const { UserModel } = require('../models')

const { NotFound, BadRequest } = require('../../helpers/httpResponse')
const { userNotFound, dataMalformed } = require('../../helpers/messages')

const { id: { validateId } } = require('../../utils')

const source = 'Update - Use Case'

const Update = async ({ id, userData }) => {
  if (!validateId(id)) {
    // Invalid Id
    throw BadRequest({ source, message: dataMalformed })
  }

  const user = await UserService.findOne({ _id: id })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  const User = UserModel({
    ...userData,
    birthDate: moment(userData.birthDate, 'DD/MM/YYYY')
  })

  await UserService.update({ _id: id }, User)

  return User
}

module.exports = Update
