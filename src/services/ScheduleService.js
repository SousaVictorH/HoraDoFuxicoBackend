const SchedulesDatabase = require('../databases/SchedulesDatabase')
const { ScheduleModel } = require('../domain/models')

const { NotFound } = require('../helpers/httpResponse')
const { scheduleNotFound } = require('../helpers/messages')

const create = async (schedule) => {
  const Schedule = ScheduleModel(schedule)

  return ScheduleModel(await SchedulesDatabase.create(Schedule))
}

const find = async (filter = { userId }) => {
  return await SchedulesDatabase.find(filter)
}

const getPage = async ({ userId, page, limit }) => {
  const { schedules, total } = await SchedulesDatabase.getPage({ userId, page, limit })

  return {
    schedules: schedules.map((schedule) => ScheduleModel(schedule)),
    numberOfPages: Math.ceil(total / limit)
  }
}

const getDetails = async (filter = { _id }) => {
  return ScheduleModel(await SchedulesDatabase.getDetails(filter))
}

const schedule = async ({ scheduleId, userId }) => {
  const targetSchedule = await SchedulesDatabase.getDetails({ _id: scheduleId })

  if (!targetSchedule) throw NotFound({ source, message: scheduleNotFound })

  targetSchedule.users = [...targetSchedule.users, userId]

  targetSchedule.save()
}

const cancelSchedule = async ({ scheduleId, userId }) => {
  const targetSchedule = await SchedulesDatabase.getDetails({ _id: scheduleId })

  if (!targetSchedule) throw NotFound({ source, message: scheduleNotFound })

  targetSchedule.users = targetSchedule.users.filter((id) => id !== userId)

  if (targetSchedule.users.length === 0) {
    await SchedulesDatabase.deleteOne({ _id: scheduleId })
  } else {
    targetSchedule.save()
  }
}

module.exports = {
  create,
  find,
  getPage,
  getDetails,
  schedule,
  cancelSchedule
}
