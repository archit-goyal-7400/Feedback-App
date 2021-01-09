const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

router.post("/api/addServey", (req, res, next) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title: title,
    subject: subject,
    body: body,
    recipients: recipients.split(",").map((email) => {
      return { email: email };
    }),
    _user: req.user.id,
    dateSent: Date.now(),
  });
});

module.exports = router;
