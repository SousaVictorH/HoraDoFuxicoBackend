const ScheduleService = require('../../../services/ScheduleService')
const UserService = require('../../../services/UserService')

const { BadRequest, NotFound } = require('../../../helpers/httpResponse')
const { dataMalformed, scheduleNotFound } = require('../../../helpers/messages')

const source = 'Get Schedules - Use Case'

const GetSchedule = async ({ id }) => {
  if (!id) throw BadRequest({ source, message: dataMalformed })

  const schedule = await ScheduleService.getDetails({ _id: id })

  if (!schedule.id) throw NotFound({ source, message: scheduleNotFound })

  const users = []

  for (id of schedule.users) {
    const user = await UserService.findOne({ _id: id })

    users.push({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      birthDate: user.birthDate,
      phoneNumber: user.phoneNumber
    })
  }

  return {
    ...schedule,
    users
  }
}

module.exports = GetSchedule
