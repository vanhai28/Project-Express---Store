const mongoose = require('mongoose') ;
// const { Schema } = require('./bookMongooseModel');
const mongoosePaginate = require('mongoose-paginate-v2');

const reviewSchema = new mongoose.Schema({
  bookID: mongoose.Schema.Types.ObjectId,
  date: Date,
  quality: Number,
  content: String,
  user_name: String,
},
  { collection: "reviews" }
);
reviewSchema.plugin(mongoosePaginate);
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;