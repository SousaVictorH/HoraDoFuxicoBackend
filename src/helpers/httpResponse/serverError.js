const ServerError = (source, message) => {
  throw {
    error: {
      source: source,
      message: 'internal error ' + message,
      statusCode: 500
    }
  }
}

module.exports = ServerError
