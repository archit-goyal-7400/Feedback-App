const express = require("express");
const app = express();
const passport = require("passport");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

require("./services/passport");

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSecret],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI).then(() => {
  app.listen(PORT);
  console.log("server is up at ", PORT);
});
