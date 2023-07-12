const moment = require('moment')

const Token = ({
  phoneNumber,
  token,
  expiration
}) => {
  const defaultExpiration = moment().add(15, 'minutes').toDate()

  return {
    phoneNumber,
    token,
    expiration: expiration || defaultExpiration
  }
}

module.exports = Token
