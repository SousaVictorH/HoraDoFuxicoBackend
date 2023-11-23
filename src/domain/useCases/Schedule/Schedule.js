const UserService = require('../../../services/UserService')
const ScheduleService = require('../../../services/ScheduleService')

const { NotFound } = require('../../../helpers/httpResponse')
const { userNotFound } = require('../../../helpers/messages')

const source = 'Make Schedule - Use Case'

const Schedule = async ({ scheduleId, userId }) => {
  const user = await UserService.findOne({ _id: userId })

  if (!user) throw NotFound({ source, message: userNotFound })

  return await ScheduleService.schedule({
    scheduleId,
    userId
  })
}

module.exports = Schedule
