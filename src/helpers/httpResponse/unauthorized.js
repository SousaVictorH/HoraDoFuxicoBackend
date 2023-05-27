const Unauthorized = ({ source, message }) => {
  throw {
    error: {
      source,
      message,
      statusCode: 401
    }
  }
}

module.exports = Unauthorized
