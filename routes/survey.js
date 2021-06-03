const express = require("express");
const { Path } = require("path-parser");
const Survey = require("../models/survey");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const mail = require("../services/mail");
router.get("/api/getSurveys", isAuth, (req, res) => {
  Survey.find({ _user: req.user.id })
    .select({ recipients: 0 })
    .then((surveys) => {
      res.send(surveys);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/api/addSurvey", isAuth, (req, res, next) => {
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
      return res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/api/survey/:surveyId/:choice", (req, res, next) => {
  console.log("vjgvgvhgvhgvhvghvgghgvhgvhgvhvh");
  res.send("Thanks for voting!");
});

router.post("/api/webhook", (req, res) => {
  console.log(req.body.message, req.body["event-data"].event, "abcd");
  const pathname = new URL(req.body["event-data"].url).pathname;
  const p = new Path("/api/survey/:surveyId/:choice");
  const match = p.test(pathname);
  console.log(match);
  const reqData = {
    event: req.body["event-data"].event,
    surveyId: match.surveyId,
    choice: match.choice,
    email: req.body["event-data"].recipient,
  };
  if (reqData.event == "clicked" && reqData.surveyId && reqData.choice) {
    Survey.updateOne(
      {
        _id: reqData.surveyId,
        recipients: {
          $elemMatch: { email: reqData.email, responded: false },
        },
      },
      {
        $inc: { [reqData.choice]: 1 },
        $set: { "recipients.$.responded": true },
        lastResponded: new Date(),
      }
    ).exec();
  }
  res.send({});
});

module.exports = router;
