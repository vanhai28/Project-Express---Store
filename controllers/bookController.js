const bookModel = require("../model/bookModel");
const Book = require("../model/mongooseModel/bookMongooseModel");
const Review = require("../model/mongooseModel/reviewMongooseModel");
const User = require("../model/mongooseModel/userMongooseModel");

const ITEM_PER_PAGE = 12;

module.exports.bookShop = function (req, res, next) {
  const page = +req.query.page || 1;
  Book.find({})
    .countDocuments()
    .then((numBook) => {
      totalBook = numBook;
      return Book.find({})
        .lean()
        .exec(function (error, books) {
          res.render("pages/book/bookShop", {
            title: "Book shop",
            books: bookModel.getItemsInPage(page, books),
            hasNextPage: ITEM_PER_PAGE * page < totalBook,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            prevPage: page - 1,
            lastPage: Math.ceil(totalBook / ITEM_PER_PAGE),
            ITEM_PER_PAGE: ITEM_PER_PAGE,
            currentPage: page,
          });
        });
    });
};

Render = function (book, reviews, res) {
  const book_detail_short = book.detail.slice(0, ShortDetailLength);
  const book_detail_remain = book.detail.slice(
    ShortDetailLength,
    f.detail.length
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

exports.bookDetail = async function (req, res, next) {
  const bookId = req.params.id;

  const relatedBooks = await bookModel.getBookByCatory();
  const upsellProducts = await bookModel.getUpsellProduct();

  const ShortDetailLength = 400;

  let book = await Book.findOne({ _id: bookId });

  var reviews = await Review.find({ bookID: bookId }).lean();

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
    //relatedBooks: relatedBooks,
    //upsellProducts: upsellProducts,
    images: book.images,
    reviews: reviews,
  });
};
