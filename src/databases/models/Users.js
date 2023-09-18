const mongoose = require('mongoose')

const User = new mongoose.Schema({
  socialId: { type: String, required: false },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  avatar: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Users', User)
