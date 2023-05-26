module.exports = {
  removeUndefinedParams(obj) {
    try {
      for (let key in obj) {
        if (!obj[key])
          delete obj[key]
      }
    } catch (error) {
      throw error
    }
  },
  objIsEmpty(obj) {
    for (let key in obj) {
      if (obj[key])
        return false
    }
    return true
  }
}
