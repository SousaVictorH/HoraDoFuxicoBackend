const bcrypt = require('bcrypt')

module.exports = {
  async encrypt(str) {
    try {
      return await bcrypt.hash(str, 10)
    } catch (error) {
      throw error
    }
  },
  async compare(str, strEncrypted) {
    try {
      return await bcrypt.compare(str, strEncrypted)
    } catch (error) {
      throw error
    }
  },
}
