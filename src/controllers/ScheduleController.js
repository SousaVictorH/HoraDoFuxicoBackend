const {
  CreateSchedule,
  GetSchedulesPage,
  GetSchedule,
  Schedule,
  CancelSchedule
} = require('../domain/useCases')

module.exports = {
  async getPage(req, res) {
    try {
      const { id } = req.params
      const { page, limit } = req.query

      const schedulesPage = await GetSchedulesPage({
        userId: id,
        page: Number(page) || 1,
        limit: Number(limit) || 10
      })

      return res.status(200).json(schedulesPage)
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
  },
  async getDetails(req, res) {
    try {
      const { id } = req.params

      return res.status(200).json(await GetSchedule({ id }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async schedule(req, res) {
    try {
      const {
        scheduleId,
        userId
      } = req.body

      return res.status(200).json(await Schedule({ scheduleId, userId }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  },
  async cancel(req, res) {
    try {
      const {
        scheduleId,
        userId
      } = req.body

      return res.status(200).json(await CancelSchedule({ scheduleId, userId }))
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  }
}
