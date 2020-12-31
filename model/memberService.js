const memberMongoose = require("./mongooseModel/memberMongooseModel");

module.exports.getMember = async () =>{
    return await memberMongoose.find({}).lean();
}