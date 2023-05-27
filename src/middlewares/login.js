const yup = require('yup')

const {
  invalidToken,
  tokenRequired,
  invalidPhone,
  phoneRequired
} = require('../helpers/messages/validation')

const schema = yup.object().shape({
  token: yup.string().length(6, invalidToken).required(tokenRequired),
  phoneNumber: yup
    .string()
    .required(phoneRequired)
    .length(11, invalidPhone)
    .test('phone-test', invalidPhone, value => {
      return /^[0-9]+$/.test(value)
    })
})

module.exports = schema
