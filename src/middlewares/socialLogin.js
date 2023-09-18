const yup = require('yup')

const {
  idRequired,
  nameRequired
} = require('../helpers/messages/validation')

const schema = yup.object().shape({
  id: yup.string().required(idRequired),
  name: yup.string().required(nameRequired)
})

module.exports = schema
