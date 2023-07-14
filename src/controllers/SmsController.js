const { SendSMS } = require('../domain/useCases');

const { ServerError } = require('../helpers/httpResponse');
const { failedToSendSMS } = require('../helpers/messages');

const source = 'Send SMS - Controller';

module.exports = {
  async sendSMS({ to, subject, text }) {
    try {
      await SendSMS({ to, subject, text })
    } catch (error) {
      throw ServerError({ source, message: failedToSendSMS })
    }
  }
}
