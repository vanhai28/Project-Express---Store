const bookModel = require("../model/bookModel");
const { paginate } = require("../model/mongooseModel/bookMongooseModel");
const Book = require("../model/mongooseModel/bookMongooseModel");
const Review = require("../model/mongooseModel/reviewMongooseModel");
const User = require("../model/mongooseModel/userMongooseModel");

const ITEM_PER_PAGE = 12;

module.exports.bookShop = async function (req, res, next) {
  const page = +req.query.page || 1;
  
  const paginate = await bookModel.listBook(page, ITEM_PER_PAGE);
  
  res.render('pages/book/bookShop',{
    title: "Book Shop",
    books: paginate.docs, 
    hasNextPage: paginate.hasNextPage,
    hasPreviousPage: paginate.hasPrevPage,
    nextPage: paginate.nextPage,
    prevPage: paginate.prevPage,
    lastPage: paginate.totalPages,
    ITEM_PER_PAGE: ITEM_PER_PAGE,
    currentPage: paginate.page,
  });
};


Render = function (book, reviews, res) {
  const book_detail_short = book.detail.slice(0, ShortDetailLength);
  const book_detail_remain = book.detail.slice(ShortDetailLength,f.detail.length);
  res.render("./pages/book/bookDetail", {
    title: "Detail",
    book_name_main: book.title,
    current_cost_main: book.price,
    image_book_main_cover: book.cover,
    book_detail_short: book_detail_short,
    book_detail_remain: book_detail_remain,
    relatedBooks: relatedBooks,
    upsellProducts: upsellProducts,
    images: book.images,
    reviews: reviews,
  });
};

exports.bookDetail = async function (req, res, next) {
  const bookId = req.params.id;

  const ShortDetailLength = 400;

  let book = await Book.findOne({ _id: bookId });

  var reviews = await Review.find({ bookID: bookId }).lean();

  const genre = book.category;
  const relatedBooks = await bookModel.getBookByCatory(genre, 6);;
  const upsellProducts = await bookModel.getBookByCatory(genre, 6);

  const book_detail_short = book.detail.slice(0, ShortDetailLength);
  const book_detail_remain = book.detail.slice(
    ShortDetailLength,
    book.detail.length
  );
  res.render("./pages/book/bookDetail", {
    title: "Detail",
    book_name_main: book.title,
    current_cost_main: book.price,
    image_book_main_cover: book.cover,
    book_detail_short: book_detail_short,
    book_detail_remain: book_detail_remain,
    relatedBooks: relatedBooks,
    upsellProducts: upsellProducts,
    images: book.images,
    reviews: reviews,
  });
};
