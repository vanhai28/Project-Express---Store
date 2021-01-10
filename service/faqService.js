const faq = require("../model/faqModel");

module.exports.getFAQ = async () => {
  return await faq.find({}).lean();
};
