const mongoose = require('mongoose')

const Token = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  token: { type: String, required: true, minlength: 6, maxlength: 6 },
  expiration: { type: Date, required: true },
});

module.exports = mongoose.model('Tokens', Token)
