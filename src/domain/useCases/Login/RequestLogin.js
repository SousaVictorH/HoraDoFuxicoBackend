const TokenService = require("../../../services/TokenService");
const SendSMS = require("../User/SendSMS");

const {
  token: { generateToken },
  encrypter: { encrypt },
} = require("../../../utils");

const { getAccessTokenText } = require("../../../helpers/messages");

const RequestLogin = async ({ phoneNumber }) => {
  if (await TokenService.findOne({ phoneNumber })) {
    // If token already exist, delete it
    await TokenService.deleteOne({ phoneNumber });
  }

  const token = generateToken();

  // Send sms
  await SendSMS({
    to: phoneNumber,
    text: getAccessTokenText(token),
  });

  await TokenService.create({
    token: await encrypt(token),
    phoneNumber,
  });
};

module.exports = RequestLogin;
