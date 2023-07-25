const yup = require('yup')
const moment = require('moment')

const {
  nameRequired,
  invalidName,
  birthDateRequired,
  invalidBirthDate,
  invalidPhone,
  phoneRequired,
  shouldBeAdult
} = require('../helpers/messages/validation')

const schema = yup.object().shape({
  name: yup.string().required(nameRequired).min(3, invalidName),
  birthDate: yup.
    string().
    required(birthDateRequired).
    test('date test', shouldBeAdult, function (value) {
      try {
        const currentDate = moment()
        const birthDate = moment(value, 'DD/MM/YYYY')

        if (
          !birthDate.isValid() ||
          currentDate.diff(birthDate, 'years') < 18
        ) return false

        return true
      } catch (error) {
        throw { message: invalidBirthDate }
      }
    }),
  phoneNumber: yup
    .string()
    .required(phoneRequired)
    .length(11, invalidPhone)
    .test('phone-test', invalidPhone, value => {
      return /^[0-9]+$/.test(value)
    })
})

module.exports = schema
