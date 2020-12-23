const bookService = require("../model/bookService");
const Book = require("../model/mongooseModel/bookMongooseModel");
const ITEM_PER_PAGE = 12;

// const CATEGORY ={};
// CATEGORY.KyNangSong = "5fc50d6be77a5f7fc39b83f0";
// CATEGORY.HocNgoaiNgu ="5fc50da4e77a5f7fc39b83f1";
// CATEGORY.TreEm ="5fc50dcae77a5f7fc39b83f2";
// CATEGORY.KinhTe ="5fc602e08afb5827a4dabfc3";
// CATEGORY.KhoaHoc ="5fc5eadcc2391d0017da2ea3";

module.exports.bookShop = async function (req, res, next) {
  const page = +req.query.page || 1;
  const catId = req.query.catId;
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

  const paginate = await bookService.listBook(filter, page, ITEM_PER_PAGE);
  const category = await bookService.getCategory();

  res.render('pages/book/bookShop',{
    title: "Book Shop",
    isLogin: false,
    books: paginate.docs, 
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
