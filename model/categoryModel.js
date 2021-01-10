const mongoose = require("mongoose");

const { Schema } = mongoose;

const category = new Schema(
  {
    nameOfCategory: String,
    numberOfProduct: Number,
  },
  { collection: "catalog" }
);

module.exports = mongoose.model("category", category);