const mongoose = require("mongoose");
const { Schema } = mongoose;

const Follower = new Schema(
  {
    email: String,
  },
  {
    collection: "followers",
  }
);

module.exports = mongoose.model("follower", Follower);
