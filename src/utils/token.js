module.exports = {
  generateToken() {
    return (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1)
  }
}