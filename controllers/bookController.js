const bookService = require("../service/bookService");
const reviewService = require("../service/reviewService");
const ITEM_PER_PAGE = 12;

exports.bookShop = async function (req, res, next) {
  const page = +req.query.page || 1;
  const catId = req.query.catId;
  const sort = req.query.sort;
  const q = req.query.q;

  let filter;
  if (q) {
    filter = { $text: { $search: q } };
  } else {
    filter = {};
  }

  if (catId) {
    filter.idCategory = catId;
  }

  let paginate;
  if (sort) {
    paginate = await bookService.listSortedBook(sort, page, ITEM_PER_PAGE);
  } else {
    paginate = await bookService.listBook(filter, page, ITEM_PER_PAGE);
  }

  const category = await bookService.getCategory();

  res.render("./pages/book/bookShop", {
    title: "Book Shop",
    books: paginate,
    q: q,
    catId: catId,
    CATEGORY: category,
    sort: sort,
    srt: sort,
  });
};

const REVIEW_PER_PAGE = 3;

exports.bookDetail = async function (req, res, next) {
  const bookId = req.params.id;
  const page = +req.query.page || 1;

  const book = await bookService.getBookById(bookId);

  let filter = { bookID: bookId };
  const paginate = await reviewService.listReview(
    filter,
    page,
    REVIEW_PER_PAGE
  );

  const genre = book.category;
  let relatedBooks = await bookService.getBookByCategory(genre, 6);
  const category = await bookService.getCategory();

  try {
    await bookService.increaseView(bookId);
  } catch (error) {
    console.log(error);
  }

  res.render("./pages/book/bookDetail", {
    title: "Detail",
    book: book,
    relatedBooks: relatedBooks,
    reviews: paginate.docs,
    CATEGORY: category,
    hasNextPage: paginate.hasNextPage,
    hasPreviousPage: paginate.hasPrevPage,
    nextPage: paginate.nextPage,
    prevPage: paginate.prevPage,
    lastPage: paginate.totalPages,
    ITEM_PER_PAGE: REVIEW_PER_PAGE,
    currentPage: paginate.page,
  });
};
