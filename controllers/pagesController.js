const bookService = require("../service/bookService");
const memberService = require("../service/memberService");
const faqService = require("../service/faqService");
const arrModel = require("../service/arrayService");
const numberService = require("../service/numberService");

const Book = require("../model/bookModel");

module.exports.index = async function (req, res, next) {
  let softSkillBook = await bookService.getBookByCategory("Kỹ năng sống", 12);
  let childrenBook = await bookService.getBookByCategory("Sách thiếu nhi", 12);
  let learnForeignLanguageBook = await bookService.getBookByCategory(
    "Học ngoại ngữ",
    12
  );
  let economicBook = await bookService.getBookByCategory("Kinh tế", 12);

  let bestSellerBook = await Book.find({ best_seller: true }).limit(12).lean();
  softSkillBook = arrModel.modifyArray(softSkillBook);
  learnForeignLanguageBook = arrModel.modifyArray(learnForeignLanguageBook);
  economicBook = arrModel.modifyArray(economicBook);
  childrenBook = arrModel.modifyArray(childrenBook);

  bestSellerBook = bestSellerBook.map((book) => {
    return {
      _id: book._id,
      cover: book.cover,
      title: book.title,
      old_price: numberService.formatNumber(book.old_price),
      price: numberService.formatNumber(book.price),
    };
  });

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
    title: "Về chúng tôi",
    member,
  });
};

module.exports.checkout = (req, res, next) => {
  res.render("pages/checkout", { title: "Thanh toán" });
};

module.exports.contact = (req, res, next) => {
  res.render("pages/contact", { title: "Thông tin liên hệ" });
};
module.exports.faq = async (req, res, next) => {
  const faq = await faqService.getFAQ();
  res.render("pages/faq", {
    title: "Những câu hỏi thường gặp",
    faq,
  });
};
