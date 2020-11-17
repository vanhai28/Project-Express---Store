const userModel = require("../model/userModel");

exports.addUser = async function (req, res) {
  const { user_name, user_email, password, re_password } = req.body;

  const newUser = {
    user_name,
    user_email,
    password,
  };

  try {
    await userModel.addUser(newUser).then(() => {
      res.redirect("/login");
    });
  } catch (err) {
    res.render("pages/register", {
      title: "Register",
      err: "You can’t create an account right now. Try again later!!",
    });
    return;
  }
};
