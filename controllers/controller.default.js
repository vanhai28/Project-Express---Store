const bookModel = require("../model/bookModel");

module.exports.index = function (req, res, next) {
  res.render("index", {
    title: "Home",
    newBook: bookModel.getNewProduct(),
    listBook: bookModel.listBook(),
    bestSellerBook: bookModel.getBestSellerBook(),
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
