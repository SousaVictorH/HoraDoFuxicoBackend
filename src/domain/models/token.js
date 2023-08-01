const moment = require('moment')

const Token = ({
  id,
  _id,
  phoneNumber,
  token,
}) => {
  return {
    id: id || _id,
    phoneNumber,
    token
  }
}

module.exports = Token
