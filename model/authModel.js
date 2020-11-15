const bcrypt = require("bcrypt");
const userMongooseModel = require("./mongooseModel/userMongooseModel");

exports.authLoginAcc = async (emailOrUserName, pass) => {
  let err = "";
  //----------------- tim trong database ---------------

  let isHasUsername = await userMongooseModel.findOne({
    user_name: emailOrUserName,
  });
  let isHasEmail = await userMongooseModel.findOne({
    user_email: emailOrUserName,
  });

  let user = isHasUsername || isHasEmail;
  console.log("user : ----- " + user);
  if (user) {
    console.log(user.password);
    let checkPassword = await bcrypt.compare(pass, user.password);
    console.log("checl : ", checkPassword);
    if (checkPassword) {
      return null;
    }
  }
  err = "Username and password is not match";

  return err;
};
