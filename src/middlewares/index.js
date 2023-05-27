const { Unauthorized } = require('../helpers/httpResponse')
const { noTokenProvided, invalidToken } = require('../helpers/messages')

const { verifyToken } = require('../helpers/token')

const { verificationMiddlewares } = require('../helpers/messages/validation')

module.exports = {
  validateMiddleware: (schema) => {
    return async (req, res, next) => {
      try {
        // Validate schema
        await schema.validate(req.body, { abortEarly: false })
        next();
      } catch (error) {
        res.status(400).json({
          error: {
            source: verificationMiddlewares,
            message: error?.message,
            statusCode: 400
          }
        })
      }
    }
  },
  validateToken: (req, res, next) => {
    try {
      const token = req.headers.authorization

      if (!token) {
        // No token provided
        throw Unauthorized({ source: verificationMiddlewares, message: noTokenProvided })
      }

      const data = verifyToken({ token })

      if (!data) {
        // Invalid token
        throw Unauthorized({ source: verificationMiddlewares, message: invalidToken })
      }

      next()
    } catch (error) {
      const { statusCode } = error.error

      return res.status(statusCode).json(error)
    }
  }
}
