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

const find = async ({ userId, page, limit }) => {
  const schedules = await Schedules.find({ users: userId })
    .sort({ _id: -1 })
    .skip((page - 1) * limit)
    .limit(limit)

  const total = await Schedules.countDocuments({
    users: userId
  })

  return {
    schedules,
    total
  }
}

const findAll = async ({ userId }) => {
  return await Schedules.find({ users: userId }).select(['id'])
}

module.exports = {
  create,
  find,
  findAll
}