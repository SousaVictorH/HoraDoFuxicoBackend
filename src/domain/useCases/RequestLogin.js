const TokenService = require('../../services/TokenService')

const { token: { generateToken } } = require('../../utils')

const { TokenModel } = require('../models')

const RequestLogin = async ({ phoneNumber }) => {
  if (await TokenService.findOne({ phoneNumber })) {
    // If token already exist, delete it
    await TokenService.deleteOne({ phoneNumber })
  }

  const token = generateToken()

  const Token = TokenModel({
    token,
    phoneNumber
  })

  await TokenService.create(Token)
}

module.exports = RequestLogin
