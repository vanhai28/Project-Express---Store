const mongoose = require('mongoose') ;

const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  price:{
    _bsontype: 'Decimal128',
  },
  old_price:{
    _bsontype: 'Decimal128',
  },
  category: String,
  detail: String,
  images: Array,
  best_seller: Boolean,
  cover: String,
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;