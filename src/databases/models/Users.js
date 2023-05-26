const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  avatar: { type: String },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', User)
