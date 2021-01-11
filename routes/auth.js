const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res, next) => {
    res.redirect("/surveys");
  }
);
router.get("/api/logout", (req, res) => {
  // console.log("logout");
  req.logout();
  // res.send(req.user);
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
