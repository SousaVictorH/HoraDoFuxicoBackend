require('dotenv').config()

const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

const generateToken = ({ userId }) => {
  const payload = { id: userId }

  const options = { expiresIn: 86400 }

  return jwt.sign(payload, secretKey, options)
}

const verifyToken = ({ token }) => {
  try {
    return jwt.verify(token, secretKey)
  } catch (error) {
    return null
  }
}

module.exports = {
  generateToken,
  verifyToken
}