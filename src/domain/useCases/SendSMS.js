const twilio = require('twilio')

const { ACCOUNT_SID, AUTH_TOKEN, PHONE_NUMBER } = require('../../resources/configs/sms')

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const SendSMS = async ({ to, text }) => {
  const phoneNumber = '+55' + to

  await client.messages.create({
    body: text,
    to: phoneNumber,
    from: PHONE_NUMBER
  })
}

module.exports = SendSMS
