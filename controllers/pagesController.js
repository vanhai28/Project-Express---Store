const bookService = require("../model/bookService");
const arrModel = require("../service/arrayHelper");

const Book = require("../model/mongooseModel/bookMongooseModel");

module.exports.index = async function (req, res, next) {
  let softSkillBook = await bookService.getBookByCatory("Kỹ năng sống", 12);
  let childrenBook = await bookService.getBookByCatory("Sách thiếu nhi", 12);
  let learnForeignLanguageBook = await bookService.getBookByCatory(
    "Học ngoại ngữ",
    12
  );
  let economicBook = await bookService.getBookByCatory("Kinh tế", 12);

  const bestSellerBook = await Book.find({ best_seller: true })
    .limit(12)
    .lean();
  softSkillBook = arrModel.modifyArray(softSkillBook);
  learnForeignLanguageBook = arrModel.modifyArray(learnForeignLanguageBook);
  economicBook = arrModel.modifyArray(economicBook);
  childrenBook = arrModel.modifyArray(childrenBook);

  console.log(softSkillBook);
  res.render("index", {
    title: "Home",
    isLogin: false,
    softSkillBook: softSkillBook,
    childrenBook,
    learnForeignLanguageBook,
    economicBook,
    bestSellerBook,
  });
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
