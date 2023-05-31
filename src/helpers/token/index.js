const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

const generateToken = ({ userId }) => {
  const payload = { id: userId }

  const options = { expiresIn: 43200 } // Expires in 12 hours

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