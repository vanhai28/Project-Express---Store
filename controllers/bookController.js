const bookService = require("../model/bookService");
const numberService = require("../service/numberService");
const Book = require("../model/mongooseModel/bookMongooseModel");
const ITEM_PER_PAGE = 12;

exports.bookShop = async function (req, res, next) {
  const page = +req.query.page || 1;
  const catId = req.query.catId;
  const sort = req.query.sort;
  const q = req.query.q;

  let filter;
  if(q){
    filter = {$text: {$search: q}};
  }
  else{
    filter ={};
  }

  if(catId){
    filter.idCategory = catId;
  }

  let paginate;
  if(sort){
    paginate = await bookService.listSortedBook(sort, page, ITEM_PER_PAGE);
  }
  else{
    paginate = await bookService.listBook(filter, page, ITEM_PER_PAGE);
  }

  const category = await bookService.getCategory();

  let books = paginate.docs.map((book)=>{
    return{
      _id: book._id,
      cover: book.cover,
      title: book.title,
      old_price: numberService.formatNumber(book.old_price),
      price: numberService.formatNumber(book.price),
    }
  });

  res.render('./pages/book/bookShop',{
    title: "Book Shop",
    // books: paginate.docs, 
    books,
    hasNextPage: paginate.hasNextPage,
    hasPreviousPage: paginate.hasPrevPage,
    nextPage: paginate.nextPage,
    prevPage: paginate.prevPage,
    lastPage: paginate.totalPages,
    ITEM_PER_PAGE: ITEM_PER_PAGE,
    currentPage: paginate.page,
    q: q,
    catId: catId,
    CATEGORY: category,
    sort: sort,
    srt: sort
  });
};



exports.bookDetail = async function (req, res, next) {
  const bookId = req.params.id;

  const book = await bookService.getBookById(bookId);
  const reviews = await bookService.getReviewOfBook(bookId);

  const genre = book.category;
  const relatedBooks = await bookService.getBookByCategory(genre, 6);;
  const upsellProducts = await bookService.getBookByCategory(genre, 6);
  const category = await bookService.getCategory();

  res.render("./pages/book/bookDetail", {
    title: "Detail",
    bookID: book._id,
    book_name_main: book.title,
    current_cost_main: book.price,
    image_book_main_cover: book.cover,
    book_detail: book.detail,
    relatedBooks: relatedBooks,
    upsellProducts: upsellProducts,
    images: book.images,
    reviews: reviews,
    CATEGORY: category,
  });
};

exports.bookSearch = async (res, req, next) =>{
  const f = await Book.find({$text: {$search: "d"}});
  console.log('f', f);
}
