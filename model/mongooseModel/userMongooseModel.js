const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: String,
  user_email: String,
  password: String,
  status: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
