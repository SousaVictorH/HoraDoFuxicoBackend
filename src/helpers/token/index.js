require('dotenv').config()

const jwt = require('jsonwebtoken')

const generateToken = ({ userId }) => {
  const payload = { userId }
  const secretKey = process.env.SECRET_KEY
  const options = { expiresIn: '1h' }

  const token = jwt.sign(payload, secretKey, options)

  return token
}

const verifyToken = ({ token }) => {
  try {
    const secretKey = process.env.SECRET_KEY

    const decoded = jwt.verify(token, secretKey)

    console.log(decoded)

    return true
  } catch (error) {
    // Invalid token
    return false
  }
}

module.exports = {
  generateToken,
  verifyToken
}