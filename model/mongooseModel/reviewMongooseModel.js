const mongoose = require('mongoose') ;
const { schema } = require('./bookMongooseModel');

const reviewSchema = new mongoose.Schema({
  bookID: mongoose.Schema.Types.ObjectId,
  userID: String,
  date: Date,
  quality: Number,
  content: String,
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;