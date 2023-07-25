const mongoose = require('mongoose')

const Schedule = new mongoose.Schema({
  category: { type: String, required: true },
  date: { type: Date, required: true },

  users: { type: Array, required: true },
});

module.exports = mongoose.model('Schedules', Schedule)
