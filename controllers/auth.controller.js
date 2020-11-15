const authModel = require("../model/authModel");

exports.authLoginUser = async (req, res, next) => {
  const emailOrUserName = req.body.emailOrUserName;

  const pass = req.body.password;
  const err = await authModel.authLoginAcc(emailOrUserName, pass);

  if (err) {
    res.render("login/login", { title: "Login", err: err });
  } else {
    res.redirect("/");
  }
};
