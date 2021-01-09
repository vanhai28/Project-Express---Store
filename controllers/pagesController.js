const bookService = require("../model/bookService");
const memberService = require("../model/memberService");
const faqService = require("../model/faqService");
const arrModel = require("../service/arrayService");
const numberService = require("../service/numberService");

const Book = require("../model/mongooseModel/bookMongooseModel");

module.exports.index = async function (req, res, next) {
  let softSkillBook = await bookService.getBookByCategory("Kỹ năng sống", 12);
  let childrenBook = await bookService.getBookByCategory("Sách thiếu nhi", 12);
  let learnForeignLanguageBook = await bookService.getBookByCategory(
    "Học ngoại ngữ",
    12
  );
  let economicBook = await bookService.getBookByCategory("Kinh tế", 12);

  let bestSellerBook = await Book.find({ best_seller: true })
    .limit(12)
    .lean();
  softSkillBook = arrModel.modifyArray(softSkillBook);
  learnForeignLanguageBook = arrModel.modifyArray(learnForeignLanguageBook);
  economicBook = arrModel.modifyArray(economicBook);
  childrenBook = arrModel.modifyArray(childrenBook);

  bestSellerBook = bestSellerBook.map((book)=>{
    return{
      _id: book._id,
      cover: book.cover,
      title: book.title,
      old_price: numberService.formatNumber(book.old_price),
      price: numberService.formatNumber(book.price),
    }
  });

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

module.exports.aboutUs = async (req, res, next) => {
  const member = await memberService.getMember();
  res.render("pages/aboutUs", {
    title: "About Us",
    member,
  });
};

module.exports.checkout = (req, res, next) => {
  res.render("pages/checkout", { title: "checkout" });
};
module.exports.contact = (req, res, next) => {
  res.render("pages/contact", { title: "contact" });
};
module.exports.faq = async (req, res, next) => {
  const faq = await faqService.getFAQ();
  res.render("pages/faq", {
    title: "Frequently Asked Questions",
    faq,
  });
};
