const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    user_name: String,
    user_email: String,
    first_name: String,
    last_name: String,
    phone_number: String,
    password: String,
    status: String,
    image: String,
    avarta_image: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("user", userSchema);
