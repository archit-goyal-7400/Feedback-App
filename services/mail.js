const keys = require("../config/keys");
var mailgun = require("mailgun-js")({
  apiKey: keys.mailgunApiKey,
  domain: keys.mailgunDomain,
});

module.exports = ({ subject, recipients }, content) => {
  // console.log(recipients);
  let recipientString = recipients
    .map((rec) => {
      return rec.email;
    })
    .join(",");
  const data = {
    from: "no-reply <me@samples.feedbacky.org>",
    to: recipientString,
    subject: subject,
    html: content,
    "o:tracking-clicks": true,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      return;
    }
    // console.log(body);
    return body;
  });
};
