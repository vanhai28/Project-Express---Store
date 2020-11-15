const bookModel = require("../model/bookModel");

module.exports.bookShop = function (req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const pagination = bookModel.pagination(page);
  const prevPage = bookModel.prevPage(pagination[0].number);
  const nextPage = bookModel.nextPage(pagination[0].number);

  res.render("pages/book/bookShop", {
    title: "Book shop",
    books: bookModel.getDisplayedBook(page),
    pagination: pagination,
    prevPage: prevPage,
    nextPage: nextPage,
    page: page,
  });
};

module.exports.bookDetail = function(req, res, next){
   const array = bookModel.listBook();

   const f = array.find(x => x.ID_book == req.params.id );
   res.render('./pages/book/bookDetail', 
   { title:"Detail", 
    book_name_main: f.book_name, 
    current_cost_main: f.current_cost, 
    image_book_main: f.image_book,
    relatedBooks: bookModel.getRelatedBook(/*type*/),
    upsellProducts: bookModel.getUpsellProduct(),
    image_book_newProduct: array[20].image_book,
   });
  }


