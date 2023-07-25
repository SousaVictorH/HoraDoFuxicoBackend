const { Schedules } = require('./models')

const { ServerError } = require('../helpers/httpResponse')
const {
  failedToCreateSchedule,
} = require('../helpers/messages')

const source = 'Schedules Database'

const create = async (schedule) => {
  try {
    return await Schedules.create(schedule)
  } catch (error) {
    throw ServerError({ source, message: failedToCreateSchedule })
  }
}

module.exports = {
  create
}