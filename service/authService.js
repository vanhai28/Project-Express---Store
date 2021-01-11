const bcrypt = require("bcrypt");
const userMongooseModel = require("../model/userModel");

exports.authLoginAcc = async (emailOrUserName, pass) => {
  let err = "";
  //----------------- find in database ---------------

  let isHasUsername = await userMongooseModel.findOne({
    user_name: emailOrUserName,
  });
  let isHasEmail = await userMongooseModel.findOne({
    user_email: emailOrUserName,
  });

  let user = isHasUsername || isHasEmail;

  if (user) {
    let checkPassword = await bcrypt.compare(pass, user.password);

    if (!checkPassword) {
      err = "Username and password is not match";
    } else if (user.status == "blocked") {
      err = "your account is blocked!!";
    }
  }

  return err;
};
