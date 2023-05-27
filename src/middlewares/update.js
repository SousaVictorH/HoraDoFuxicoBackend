const yup = require('yup')

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
  name: yup.string().min(3, invalidName).required(nameRequired),
  dateOfBirth: yup.
    string().
    required(birthDateRequired).
    test('date test', shouldBeAdult, function (value) {
      try {
        const parts = value.split("/")

        const today = new Date()
        const birthDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)

        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }

        return age >= 18
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
