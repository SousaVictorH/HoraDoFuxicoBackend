const UserService = require('../../services/UserService')
const { generateToken } = require('../../helpers/token')

const Login = require('./Login')

const SocialLogin = async ({
  id,
  name,
  avatar
}) => {
  const user = await UserService.findOne({ socialId: id })

  if (user) {
    return Login({ phoneNumber: user.phoneNumber, authorized: true })
  }

  return {
    socialId: id,
    token: generateToken({ phoneNumber: id }),
    name,
    avatar
  }
}

module.exports = SocialLogin
