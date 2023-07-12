const mongoose = require('mongoose')

const Token = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  token: { type: String, required: true, minlength: 6, maxlength: 6 },
  expiration: { type: Date, required: true },
})

module.exports = mongoose.model('Tokens', Token)
