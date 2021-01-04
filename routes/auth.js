const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/auth");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/auth/google/callback", passport.authenticate("google"));

module.exports = router;
