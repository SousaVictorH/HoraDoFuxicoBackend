module.exports = {
  generateToken() {
    const token = (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1)

    console.log(token)

    return token
  }
}
