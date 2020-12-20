const authService = require("../model/authService");

exports.authLoginUser = async (req, res, next) => {
  const emailOrUserName = req.body.emailOrUserName;

  const pass = req.body.password;
  const err = await authService.authLoginAcc(emailOrUserName, pass);

  if (err) {
    res.render("pages/login", { title: "Login", err: err });
  } else {
    res.redirect("/");
  }
};
