const bookModel = require("../model/bookModel");
const { paginate } = require("../model/mongooseModel/bookMongooseModel");
const Book = require("../model/mongooseModel/bookMongooseModel");
const Review = require("../model/mongooseModel/reviewMongooseModel");
const User = require("../model/mongooseModel/userMongooseModel");

const ITEM_PER_PAGE = 12;

const CATEGORY ={};
CATEGORY.KyNangSong = "5fc50d6be77a5f7fc39b83f0";
CATEGORY.HocNgoaiNgu ="5fc50da4e77a5f7fc39b83f1";
CATEGORY.TreEm ="5fc50dcae77a5f7fc39b83f2";
CATEGORY.KinhTe ="5fc602e08afb5827a4dabfc3";
CATEGORY.KhoaHoc ="5fc5eadcc2391d0017da2ea3";
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

  const paginate = await bookModel.listBook(filter, page, ITEM_PER_PAGE);
  
  
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
    q: q,
    catId: catId,
    CATEGORY: CATEGORY,
  });
};



exports.bookDetail = async function (req, res, next) {
  const bookId = req.params.id;

  const book = await Book.findOne({ _id: bookId });

  const reviews = await Review.find({ bookID: bookId }).lean();

  const genre = book.category;
  const relatedBooks = await bookModel.getBookByCatory(genre, 6);;
  const upsellProducts = await bookModel.getBookByCatory(genre, 6);

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
    CATEGORY: CATEGORY,
  });
};

exports.bookSearch = async (res, req, next) =>{
  const f = await Book.find({$text: {$search: "d"}});
  console.log('f', f);
}
