const SchedulesDatabase = require('../databases/SchedulesDatabase')
const { ScheduleModel } = require('../domain/models')

const create = async (schedule) => {
  const Schedule = ScheduleModel(schedule)

  return ScheduleModel(await SchedulesDatabase.create(Schedule))
}

const find = async ({ userId, page, limit }) => {
  const { schedules, total } = await SchedulesDatabase.find({ userId, page, limit })

  return {
    schedules: schedules.map((schedule) => ScheduleModel(schedule)),
    numberOfPages: Math.ceil(total / limit)
  }
}

const findAll = async ({ userId }) => {
  const schedules = await SchedulesDatabase.findAll({ userId })

  const schedulesIds = []

  for (item of schedules) {
    schedulesIds.push(item._id)
  }

  return schedulesIds
}

module.exports = {
  create,
  find,
  findAll
}