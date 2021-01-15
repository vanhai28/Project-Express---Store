const bookService = require("../service/bookService");
const memberService = require("../service/memberService");
const faqService = require("../service/faqService");
const arrModel = require("../service/arrayService");
const Book = require("../model/bookModel");

const TOP_BESTSELLER = 10;

module.exports.homePage = async function (req, res, next) {
  let softSkillBook = await bookService.getBookByCategory("Kỹ năng sống", 12);
  let childrenBook = await bookService.getBookByCategory("Sách thiếu nhi", 12);
  let learnForeignLanguageBook = await bookService.getBookByCategory(
    "Học ngoại ngữ",
    12
  );
  let economicBook = await bookService.getBookByCategory("Kinh tế", 12);

  let bestSellerBook = await Book.find({ best_seller: true })
    .limit(TOP_BESTSELLER)
    .lean();

  //modify for render in template
  softSkillBook = arrModel.modifyArray(softSkillBook);
  learnForeignLanguageBook = arrModel.modifyArray(learnForeignLanguageBook);
  economicBook = arrModel.modifyArray(economicBook);
  childrenBook = arrModel.modifyArray(childrenBook);

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
  res.render("pages/others/aboutUs", {
    title: "Về chúng tôi",
    member,
  });
};

module.exports.checkout = (req, res, next) => {
  res.render("pages/orders/checkout", { title: "Thanh toán" });
};

module.exports.contact = (req, res, next) => {
  res.render("pages/others/contact", { title: "Thông tin liên hệ" });
};
module.exports.faq = async (req, res, next) => {
  const faq = await faqService.getFAQ();
  res.render("pages/others/faq", {
    title: "Những câu hỏi thường gặp",
    faq,
  });
};
