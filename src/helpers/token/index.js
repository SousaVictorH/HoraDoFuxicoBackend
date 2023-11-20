const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

const generateToken = ({ phoneNumber }) => {
  const payload = { phoneNumber }

  const options = { expiresIn: 604800 } // Expires in 7 days

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
