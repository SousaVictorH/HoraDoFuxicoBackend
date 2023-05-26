const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.woebim6.mongodb.net/`

const options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}

module.exports = { url, options }
