const SchedulesDatabase = require('../databases/SchedulesDatabase')
const { ScheduleModel } = require('../domain/models')

const create = async (schedule) => {
  const Schedule = ScheduleModel(schedule)

  return ScheduleModel(await SchedulesDatabase.create(Schedule))
}

module.exports = {
  create
}