const UserService = require('../../../services/UserService')
const ScheduleService = require('../../../services/ScheduleService')

const { NotFound, BadRequest } = require('../../../helpers/httpResponse')
const { userNotFound, dataMalformed } = require('../../../helpers/messages')

const { id: { validateId } } = require('../../../utils')

const source = 'Get Schedules - Use Case'

const GetSchedulesPage = async ({
  userId,
  page,
  limit
}) => {
  if (!validateId(userId)) {
    // Invalid Id
    throw BadRequest({ source, message: dataMalformed })
  }

  const user = await UserService.findOne({ _id: userId })

  if (!user) {
    // User Not Found
    throw NotFound({ source, message: userNotFound })
  }

  return await ScheduleService.getPage({
    userId,
    page,
    limit
  })
}

module.exports = GetSchedulesPage
