const UserService = require('../../services/UserService')
const ScheduleService = require('../../services/ScheduleService')

const { generateToken } = require('../../helpers/token')

const { BadRequest } = require('../../helpers/httpResponse')
const { failedToReadUser } = require('../../helpers/messages')

const source = 'Get User'

const VerifyUser = async ({ id }) => {
  const user = await UserService.findOne({ _id: id })

  if (!user) {
    throw BadRequest({ source, message: failedToReadUser })
  }

  const token = generateToken({ phoneNumber: user.phoneNumber })

  const schedules = await ScheduleService.find({ userId: user.id })

  const schedulesIds = []

  for (item of schedules) {
    schedulesIds.push(item._id)
  }

  return {
    token,
    schedules: schedulesIds,
    ...user
  }
}

module.exports = VerifyUser
