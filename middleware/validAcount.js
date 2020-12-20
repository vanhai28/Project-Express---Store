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
      err: "Username is already exist",
    });
    return;
  }
  if (checkUserEmail) {
    res.render("pages/register", {
      title: "Register",
      err: "Email is already exist",
    });
    return;
  }

  if (password !== re_password) {
    res.render("pages/register", {
      title: "Register",
      err: "Password is not match",
    });
    return;
  }

  next();
};
