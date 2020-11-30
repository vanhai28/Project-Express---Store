const bookModel = require("../model/bookModel");
const Book = require("../model/mongooseModel/bookMongooseModel");
const Review = require("../model/mongooseModel/reviewMongooseModel");
const User = require("../model/mongooseModel/userMongooseModel");

const ITEM_PER_PAGE = 12;
// CODE cu

// module.exports.bookShop = function (req, res, next) {
//   const page = parseInt(req.query.page) || 1;
//   const pagination = bookModel.pagination(page);
//   const prevPage = bookModel.prevPage(pagination[0].number);
//   const nextPage = bookModel.nextPage(pagination[0].number);

//   res.render("pages/book/bookShop", {
//     title: "Book shop",
//     books: bookModel.getDisplayedBook(page),
//     pagination: pagination,
//     prevPage: prevPage,
//     nextPage: nextPage,
//     page: page,
//   });
// };

// module.exports.bookDetail = function(req, res, next){
//    const array = bookModel.listBook();

//    const f = array.find(x => x.ID_book == req.params.id );
//    res.render('./pages/book/bookDetail', 
//    { title:"Detail", 
//     book_name_main: f.book_name, 
//     current_cost_main: f.current_cost, 
//     image_book_main: f.image_book,
//     relatedBooks: bookModel.getRelatedBook(/*type*/),
//     upsellProducts: bookModel.getUpsellProduct(),
//     image_book_newProduct: array[20].image_book,
//    });
//   }

//Code moi

module.exports.bookShop = function (req, res, next) {

  const page = +req.query.page || 1;
    Book.find({})
    .countDocuments()
    .then(numBook =>{
      totalBook = numBook;
      return Book.find({}).lean().exec(function(error, books) {
            res.render("pages/book/bookShop", {
              title: "Book shop",
              books: bookModel.getItemsInPage(page, books),
              hasNextPage: ITEM_PER_PAGE * page < totalBook,
              hasPreviousPage: page > 1,
              nextPage: page + 1,
              prevPage: page - 1,
              lastPage: Math.ceil(totalBook/ITEM_PER_PAGE),
              ITEM_PER_PAGE: ITEM_PER_PAGE,
              currentPage: page
        })
      });
    })   
}

  Render = function(book,reviews, res){
    const book_detail_short = book.detail.slice(0, ShortDetailLength);
    const book_detail_remain = book.detail.slice(ShortDetailLength , f.detail.length);
    res.render('./pages/book/bookDetail', 
      { title:"Detail", 
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
  }

exports.bookDetail = async function(req, res, next){
  const bookId = req.params.id;

  const relatedBooks = bookModel.getRelatedBook(/*type*/);
  const upsellProducts = bookModel.getUpsellProduct();

  const ShortDetailLength = 400;

  const book = await Book.findOne({_id: bookId});

  var reviews = await Review.find({bookID: bookId}).lean();

  const book_detail_short = book.detail.slice(0, ShortDetailLength);
    const book_detail_remain = book.detail.slice(ShortDetailLength , book.detail.length);
    res.render('./pages/book/bookDetail', 
      { title:"Detail", 
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
}
