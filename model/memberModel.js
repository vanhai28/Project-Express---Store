const mongoose = require("mongoose");

const { Schema } = mongoose;

const members = new Schema(
  {
    name: String,
    github: String,
    facebook: String,
    image: String,
  },
  { collection: "members" }
);

module.exports = mongoose.model("members", members);