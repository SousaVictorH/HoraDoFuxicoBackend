const SchedulesDatabase = require('../databases/SchedulesDatabase')
const { ScheduleModel } = require('../domain/models')

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

module.exports = {
  create,
  find,
  getPage
}