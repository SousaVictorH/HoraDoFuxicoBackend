module.exports = {
  validateId: (id) => {
    if (!id) return false

    return id.length === 24
  }
}
