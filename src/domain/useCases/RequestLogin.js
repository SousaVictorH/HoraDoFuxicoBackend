const TokenService = require('../../services/TokenService')

const { TokenModel } = require('../models')

const RequestLogin = async ({ phoneNumber }) => {
  if (await TokenService.findOne({ phoneNumber })) {
    // If token already exist, delete it
    await TokenService.deleteOne({ phoneNumber })
  }

  const token = TokenModel({
    token: (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1),
    phoneNumber
  })

  await TokenService.create(token)
}

module.exports = RequestLogin
