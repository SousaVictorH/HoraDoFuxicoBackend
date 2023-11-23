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

const getPage = async ({ userId, page, limit }) => {
  const schedules = await Schedules
    .find({ users: userId }, '_id category date')
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

const find = async ({ userId, select = ['id'] }) => {
  const filter = {}

  if (userId) filter.users = userId

  return await Schedules.find(filter).select(select)
}

const getDetails = async (filter = { _id }) => {
  return await Schedules.findOne(filter)
}

const deleteOne = async (filter = { _id }) => {
  await Schedules.deleteOne(filter)
}

module.exports = {
  create,
  getPage,
  find,
  getDetails,
  deleteOne
}
