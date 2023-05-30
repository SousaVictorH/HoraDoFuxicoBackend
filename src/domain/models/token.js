const moment = require('moment')

const Token = ({
  userId,
  token,
  expiration
}) => {
  const defaultExpiration = moment().add(15, 'minutes').toDate()

  return {
    userId,
    token,
    expiration: expiration || defaultExpiration
  }
}

module.exports = Token
