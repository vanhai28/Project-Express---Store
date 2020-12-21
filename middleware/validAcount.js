const bcrypt = require("bcrypt");
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

exports.checkPassword = async (req, res, next) => {
  const { cur_password, new_password, re_password } = req.body;

  let checkPassword = await bcrypt.compare(cur_password, req.user.password);
  let checkNewPassword = await bcrypt.compare(new_password, req.user.password);
  if (!checkPassword) {
    res.render('pages/passwordChange', {
      title: 'Change Password',
      result: 'Mật khẩu hiện tại không chính xác',
    });
    return;
  }

  if (checkNewPassword) {
    res.render('pages/passwordChange', {
      title: 'Change Password',
      result: 'Mật khẩu mới trùng với mật khẩu hiện tại',
    });
    return;
  }

  if (new_password !== re_password) {
    res.render("pages/passwordChange", {
      title: "Change Password",
      result: "Mật khẩu mới không trùng khớp",
    });
    return;
  }


  next();
}
