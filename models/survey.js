const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RecipientSchema = require("./recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  recipients: [RecipientSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model("Survey", surveySchema);
