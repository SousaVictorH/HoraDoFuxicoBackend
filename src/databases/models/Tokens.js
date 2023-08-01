const mongoose = require('mongoose')

const EXPIRE_AFTER_SECONDS = 900 // 1 minute

const Token = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  token: { type: String, required: true }
}, { timestamps: true })

Token.index({ createdAt: 1 }, { expireAfterSeconds: EXPIRE_AFTER_SECONDS })

module.exports = mongoose.model('Tokens', Token)
