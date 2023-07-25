const moment = require('moment')

const UserService = require('../../services/UserService')
const ScheduleService = require('../../services/ScheduleService')

const { NotFound, BadRequest } = require('../../helpers/httpResponse')
const { userNotFound, dataMalformed } = require('../../helpers/messages')

const { id: { validateId } } = require('../../utils')

const source = 'Create Schedule - Use Case'

const CreateSchedule = async ({ userId, category, date, time }) => {
  if (!validateId(userId)) {
    // Invalid Id
    throw BadRequest({ source, message: dataMalformed })
  }

  const user = await UserService.findOne({ _id: userId })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  const scheduleDate = moment(date, 'DD/MM/YYYY')
  const [hours, minutes] = time.split(':')

  scheduleDate.add(hours, 'hour')
  scheduleDate.add(minutes, 'minutes')

  return await ScheduleService.create({
    category,
    date: scheduleDate,
    users: [userId]
  })
}

module.exports = CreateSchedule
