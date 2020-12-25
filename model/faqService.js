const faq = require("./mongooseModel/faqMongooseModel");

module.exports.getFAQ = async () =>{
    return await faq.find({}).lean();
}