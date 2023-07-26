const {
  CreateSchedule,
  GetSchedules
} = require('../domain/useCases')

module.exports = {
  async get(req, res) {
    try {
      const { id } = req.params
      const { page, limit } = req.query

      return res.status(200).json(await GetSchedules({ userId: id, page, limit }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async create(req, res) {
    try {
      const { id } = req.params
      const {
        category,
        date,
        time
      } = req.body

      const Schedule = await CreateSchedule({ userId: id, category, date, time })

      return res.status(200).json({ ...Schedule })
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  }
}