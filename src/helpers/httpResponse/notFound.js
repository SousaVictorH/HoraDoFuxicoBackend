const NotFound = (source, entity) => {
  throw {
    error: {
      source,
      message: entity + ' not found',
      statusCode: 404
    }
  }
}

module.exports = NotFound