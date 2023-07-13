const mongoose = require('mongoose')
const moment = require('moment')

const User = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  avatar: { type: String },

  created: { type: Date, default: moment() },
  updated: { type: Date, default: moment() },
});

module.exports = mongoose.model('Users', User)
