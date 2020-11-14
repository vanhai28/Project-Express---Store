const bookModel = require('../model/bookModel')

module.exports.index =  function(req, res, next) {
  res.render('index', { 
    title: 'Home', 
    newBook : bookModel.getNewProduct(),
    listBook : bookModel.listBook(),
    bestSellerBook : bookModel.getBestSellerBook()
  }   
    );
};

module.exports.login =  function(req, res, next) {
 res.render('login/login', { title: 'Login' });
};

module.exports.register = function(req, res, next) {
 res.render('register/register', { title: 'Register' });
}
