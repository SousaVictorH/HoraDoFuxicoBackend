const moment = require('moment')

const UserService = require('../../../services/UserService')
const ScheduleService = require('../../../services/ScheduleService')

const { NotFound } = require('../../../helpers/httpResponse')
const { userAlreadyExist } = require('../../../helpers/messages')

const source = 'Sign Up - Use Case'

const SignUp = async (userData) => {
  if (await UserService.findOne({ phoneNumber: userData.phoneNumber })) {
    // If user already exist throw not found error
    throw NotFound({ source, message: userAlreadyExist })
  }

  const user = await UserService.create({
    ...userData,
    birthDate: moment(userData.birthDate, 'DD/MM/YYYY')
  })

  const schedules = await ScheduleService.find({ userId: user.id })

  const schedulesIds = []

  for (item of schedules) {
    schedulesIds.push(item._id)
  }

  return {
    schedules: schedulesIds,
    ...user
  }
}

module.exports = SignUp
