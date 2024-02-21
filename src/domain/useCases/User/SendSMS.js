const { ACCOUNT_ID } = require("../../../resources/configs/sms");

const SendSMS = async ({ to, text }) => {
  const headers = new Headers();

  headers.append("Authorization", `App ${ACCOUNT_ID}`);
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const phoneNumber = "55" + to;

  const raw = JSON.stringify({
    messages: [
      {
        destinations: [{ to: phoneNumber }],
        from: "ServiceSMS",
        text: text,
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://ppvq98.api.infobip.com/sms/2/text/advanced",
    requestOptions
  ).catch((error) => {
    console.log("Failed to send SMS with error: ", error);
  });
};

module.exports = SendSMS;
