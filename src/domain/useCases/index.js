const Login = require('./Login/Login')
const SocialLogin = require('./Login/SocialLogin')
const RequestLogin = require('./Login/RequestLogin')
const VerifyUser = require('./Login/VerifyUser')
const SignUp = require('./Login/SignUp')

const CreateSchedule = require('./Schedule/CreateSchedule')
const GetSchedule = require('./Schedule/GetSchedule')
const Schedule = require('./Schedule/Schedule')
const CancelSchedule = require('./Schedule/CancelSchedule')

const UpdateUser = require('./User/UpdateUser')
const SendSMS = require('./User/SendSMS')

const GetUsersPage = require('./Page/GetUsersPage')
const GetSchedulesPage = require('./Page/GetSchedulesPage')

module.exports = {
  SignUp,
  Login,
  UpdateUser,
  RequestLogin,
  SendSMS,
  GetUsersPage,
  CreateSchedule,
  GetSchedulesPage,
  SocialLogin,
  VerifyUser,
  GetSchedule,
  Schedule,
  CancelSchedule
}
