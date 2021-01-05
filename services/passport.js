const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(accessToken, refreshToken, profile);
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
passport.serializeUser((user, done) => {
  done(null, user.id);
  // console.log(user.id, "serialize");
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
      // console.log(user, "deserialize");
    })
    .catch((err) => {
      console.log(err);
    });
});
