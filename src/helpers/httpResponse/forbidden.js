const Forbidden = ({ source, message }) => {
  throw {
    error: {
      source,
      message,
      statusCode: 403
    }
  }
}

module.exports = Forbidden
