require('dotenv').config()

const mongoConnection = require('./databases/connection/mongoAtlas')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  try {
    console.log("Server Active in port " + port);
  } catch (error) {
    console.log("Crached Server with error  " + error);
  }
});
