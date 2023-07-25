const yup = require('yup')
const moment = require('moment')

const { categoriesList } = require('../utils')

const {
  categoryRequired,
  shouldBeInFuture,
  dateRequired,
  invalidDate,
  timeRequired,
  invalidTime,
  invalidCategory
} = require('../helpers/messages/validation')

const schema = yup.object().shape({
  category: yup.
    string().
    required(categoryRequired).
    oneOf(categoriesList, invalidCategory),
  date: yup.
    string().
    required(dateRequired).
    test('date test', shouldBeInFuture, function (value) {
      try {
        const currentDate = moment()
        const date = moment(value, 'DD/MM/YYYY')

        const [hours, minutes] = this.parent.time.split(':')

        if (!Number(hours) || !Number(minutes)) return false

        date.add(Number(hours), 'hours')
        date.add(Number(minutes), 'minutes')

        if (
          !date.isValid() ||
          !date.isAfter(currentDate.add(30, 'minutes'))
        ) return false

        return true
      } catch (error) {
        throw { message: invalidDate }
      }
    }),
  time: yup.string().required(timeRequired).length(5, invalidTime)
})

module.exports = schema
