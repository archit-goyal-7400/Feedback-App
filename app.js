const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const User = require("./models/user");
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSecret],
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log(user.id, "serialize");
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
      console.log(user, "deserialize");
    })
    .catch((err) => {
      console.log(err);
    });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (!existingUser) {
          new User({ googleId: profile.id }).save().then((user) => {
            done(null, user);
          });
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);

app.use(authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI).then(() => {
  app.listen(PORT);
  console.log("server is up at ", PORT);
});
