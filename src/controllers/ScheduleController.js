const {
  CreateSchedule,
  GetSchedulesPage
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
  }
}