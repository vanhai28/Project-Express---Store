const mongoose = require("mongoose");

const { Schema } = mongoose;

const faq = new Schema(
  {
    question: String,
    answer: String,
  },
  { collection: "faq" }
);

module.exports = mongoose.model("faq", faq);