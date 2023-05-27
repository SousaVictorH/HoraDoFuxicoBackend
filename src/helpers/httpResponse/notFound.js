const NotFound = ({ source, message }) => {
  throw {
    error: {
      source,
      message,
      statusCode: 404
    }
  }
}

module.exports = NotFound