const {
  CreateSchedule
} = require('../domain/useCases')

module.exports = {
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