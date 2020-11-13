module.exports.index =  function(req, res, next) {
  res.render('index', { title: 'Home' });
};

module.exports.login =  function(req, res, next) {
 res.render('login/login', { title: 'Login' });
};

module.exports.register = function(req, res, next) {
 res.render('register/register', { title: 'Register' });
}
const bookListModel = require('../model/book/bookListModel');
module.exports.bookShop = function(req, res, next){
  const bookList = bookListModel.listBook();
  const page = parseInt(req.query.page) ||1;
  const productPerPage = 12;
  const startIndex = (page-1) * productPerPage;
  const endIndex = page*productPerPage;
  res.render('./book/bookShop', {title:"book shop", books :bookList.slice(startIndex, endIndex) })
}