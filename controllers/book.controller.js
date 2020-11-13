const bookModel = require('../model/bookModel');

module.exports.bookShop = function(req, res, next){
  const page = parseInt(req.query.page) || 1;
  const pagination = bookModel.pagination(page);
   const prevPage = bookModel.prevPage(pagination[0].number);
   const nextPage = bookModel.nextPage(pagination[0].number);

  res.render('./book/bookShop', 
      { title:"Book shop", 
        books :bookModel.getDisplayedBook(page),
        pagination: pagination,
        prevPage:prevPage,
        nextPage: nextPage,
        page:page 
      }
  )
}
