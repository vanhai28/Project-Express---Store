const memberModal = require("../model/memberModel");

module.exports.getMember = async () => {
  return await memberModal.find({}).lean();
};
