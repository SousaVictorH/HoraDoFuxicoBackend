const { validate } = require('yup')

function validateMiddleware(schema) {
  return async (req, res, next) => {
    try {
      // Valida os dados da requisição com o schema fornecido
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).json({
        error: {
          source: 'verification middlewares',
          message: error?.message,
          statusCode: 400
        }
      });
    }
  };
}

module.exports = validateMiddleware
