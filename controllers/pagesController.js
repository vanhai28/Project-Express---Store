const bookModel = require("../model/bookModel");
const arrModel = require("../model/arrayModel");
module.exports.index = function (req, res, next) {
  let aventureBook = bookModel.getBookByCatory("adventure", 12);
  let biographicBook = bookModel.getBookByCatory("biographicBook", 12);
  let cookBook = bookModel.getBookByCatory("cookBook", 12);
  let childrenBook = bookModel.getBookByCatory("childrenBook", 12);

  aventureBook = arrModel.modifyArray(aventureBook);
  biographicBook = arrModel.modifyArray(biographicBook);
  cookBook = arrModel.modifyArray(cookBook);
  childrenBook = arrModel.modifyArray(childrenBook);

  res.render("index", {
    title: "Home",
    newBook: bookModel.getNewProduct(),
    listBook: bookModel.listBook(),
    bestSellerBook: bookModel.getBestSellerBook(),
    biographicBook,
    aventureBook,
    childrenBook,
    cookBook,
  });
};

module.exports.login = function (req, res, next) {
  res.render("pages/login", { title: "Login" });
};

module.exports.register = function (req, res, next) {
  res.render("pages/register", { title: "Register" });
};

module.exports.aboutUs = (req, res, next) => {
  res.render("pages/aboutUs", { title: "About Us" });
};
module.exports.cart = (req, res, next) => {
  res.render("pages/cart", { title: "Cart" });
};
module.exports.checkout = (req, res, next) => {
  res.render("pages/checkout", { title: "checkout" });
};
module.exports.contact = (req, res, next) => {
  res.render("pages/contact", { title: "contact" });
};
module.exports.faq = (req, res, next) => {
  res.render("pages/faq", { title: "Frequently Asked Questions" });
};
