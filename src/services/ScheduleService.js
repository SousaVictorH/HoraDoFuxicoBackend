const SchedulesDatabase = require('../databases/SchedulesDatabase')

const create = async (schedule) => {
  return await SchedulesDatabase.create(schedule)
}

module.exports = {
  create
}