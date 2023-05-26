const mongoose = require('mongoose');

const { mongoConfig } = require('../../resources');
const { url, options } = mongoConfig;

mongoose.connect(url, options);

let mongoDB = mongoose.connection

try {
  mongoDB.on('error', () => {
    console.error.bind(console, 'connection error')
  })

  mongoDB.once('open', () => {
    console.log('MongoDB Connected!')
  })
} catch (error) {
  throw error;
}

module.exports = mongoDB
