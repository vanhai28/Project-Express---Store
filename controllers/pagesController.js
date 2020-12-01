const bookModel = require("../model/bookModel");
const arrModel = require("../model/arrayModel");
const Book = require("../model/mongooseModel/bookMongooseModel");



module.exports.index = async function (req, res, next) {

  const softSkillBook = await Book.find({category: 'Kỹ năng sống' }).limit(12).lean();
  const childrenBook = await Book.find({category: 'Sách thiếu nhi' }).limit(12).lean();
  const learnForeignLanguageBook = await Book.find({category: 'Học ngoại ngữ' }).limit(12).lean();
  const economicBook = await Book.find({category: 'Kinh tế' }).limit(12).lean();

  const bestSellerBook = await Book.find({best_seller: true}).limit(12).lean();

  const newBook = await Book.find({}).limit(7).lean();

  // aventureBook = arrModel.modifyArray(aventureBook);
  // // biographicBook = arrModel.modifyArray(biographicBook);
  // cookBook = arrModel.modifyArray(cookBook);
  // childrenBook = arrModel.modifyArray(childrenBook);

  res.render("index", {
    title: "Home",
    // newBook,
    listBook: bookModel.listBook(),
    bestSellerBook,
    softSkillBook,
    childrenBook,
    learnForeignLanguageBook,
    economicBook,
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
