const BadRequest = ({ source, message }) => {
  throw {
    error: {
      source,
      message,
      statusCode: 400
    }
  }
}

module.exports = BadRequest
