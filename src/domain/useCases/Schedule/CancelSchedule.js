const UserService = require('../../../services/UserService')
const ScheduleService = require('../../../services/ScheduleService')

const { NotFound } = require('../../../helpers/httpResponse')
const { userNotFound } = require('../../../helpers/messages')

const source = 'Cancel Schedule - Use Case'

const CancelSchedule = async ({ scheduleId, userId }) => {
  const user = await UserService.findOne({ _id: userId })

  if (!user) throw NotFound({ source, message: userNotFound })

  return await ScheduleService.cancelSchedule({
    scheduleId,
    userId
  })
}

module.exports = CancelSchedule
