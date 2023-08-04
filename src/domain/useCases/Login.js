const moment = require('moment')

const UserService = require('../../services/UserService')
const TokenService = require('../../services/TokenService')
const ScheduleService = require('../../services/ScheduleService')

const { encrypter: { compare } } = require('../../utils')

const { Unauthorized, Forbidden } = require('../../helpers/httpResponse')
const { unauthorized, invalidToken } = require('../../helpers/messages')

const { generateToken } = require('../../helpers/token')

const source = 'Login - Use Case'

const Login = async ({ phoneNumber, token, authorized = false }) => {
  if (!authorized) {
    const tokenData = await TokenService.findOne({ phoneNumber })

    if (!tokenData || moment().isAfter(tokenData.expiration)) {
      // expired token
      throw Forbidden({ source, message: unauthorized })
    }

    // validate token
    if (! await compare(token, tokenData.token)) {
      throw Unauthorized({ source, message: invalidToken })
    }

    await TokenService.deleteOne({ _id: tokenData.id })
  }

  const user = await UserService.findOne({ phoneNumber })

  if (!user) return {
    token: generateToken({ phoneNumber })
  }

  const schedules = await ScheduleService.find({ userId: user.id })

  const schedulesIds = []

  for (item of schedules) {
    schedulesIds.push(item._id)
  }

  return {
    token: generateToken({ phoneNumber }),
    schedules: schedulesIds,
    ...user
  }
}

module.exports = Login
