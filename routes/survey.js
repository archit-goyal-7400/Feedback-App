const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const mail = require("../services/mail");
router.get("/api/survey-thanks", (req, res, next) => {
  // console.log("vjgvgvhgvhgvhvghvgghgvhgvhgvhvh");
  res.send("Thanks for voting!");
});
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
  ///Great place to start mail
  mail(survey, surveyTemplate(survey));
  return survey
    .save()
    .then((survey) => {
      req.user.credits -= 1;
      return req.user.save();
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
