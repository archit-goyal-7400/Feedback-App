const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
    }
  )
);

app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
