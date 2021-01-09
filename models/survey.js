const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [
    {
      email: String,
      responded: { type: Boolean, default: 0 },
    },
  ],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model("Survey", surveySchema);
