const userMongooseModel = require("../model/mongooseModel/userMongooseModel");

exports.validAccount = async (req, res, next) => {
  const { user_name, user_email, password, re_password } = req.body;

  const checkUserName = await userMongooseModel.findOne({
    user_name,
  });

  const checkUserEmail = await userMongooseModel.findOne({ user_email });

  if (checkUserName) {
    res.render("pages/register", {
      title: "Register",
      err: "user name is already exist",
    });
    return;
  }
  if (checkUserEmail) {
    res.render("pages/register", {
      title: "Register",
      err: "email is already exist",
    });
    return;
  }

  if (password !== re_password) {
    res.render("pages/register", {
      title: "Register",
      err: "password is not match",
    });
    return;
  }

  next();
};
