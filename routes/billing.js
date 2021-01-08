const express = require("express");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecret);
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuth");

router.post("/api/stripe", isAuthenticated, (req, res, next) => {
  // console.log(req.body);
  stripe.charges
    .create({
      amount: 500,
      currency: "INR",
      source: req.body.id,
      description: "$5 for 5 credits",
    })
    .then((charge) => {
      req.user.credits += 5;
      return req.user.save();
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
