const mongoose = require('mongoose') ;

const bookSchema = new mongoose.Schema({
  id: String,
  name: String,
  price:{
    _bsontype: 'Decimal128',
  },
  old_price:{
    _bsontype: 'Decimal128',
  },
  category: String,
  detail: String,
  reviewID: String,
  cover: String,
  picture1: String,
  picture2: String,
  best_seller: Boolean
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;