const formidable = require("formidable");
const upload = require("../service/uploadFile");
const userService = require("../model/userService");


exports.addUser = async function (req, res) {
  const { user_name, user_email, password } = req.body;

  const newUser = {
    user_name,
    user_email,
    password,
  };

  try {
    await userService.addUser(newUser).then(() => {
      res.redirect("/user/login");
    });
  } catch (err) {
    res.render("pages/register", {
      title: "Register",
      err: "You can’t create an account right now. Try again later!!",
    });
    return;
  }
};

module.exports.login = function (req, res, next) {
  res.render("pages/login", { title: "Login" });
};

module.exports.register = function (req, res, next) {
  res.render("pages/register", { title: "Register" });
};

module.exports.account = async function (req, res, next) {
  const id = req.query.id;
  const user = req.user;
  try {
    // const account = await userService.getAccount(id);
    const account = await userService.getAccount(user._id);
    account.password = "";

    res.render("pages/accountManagement", {
      title: "Account",
      isLogin: false,
      userAccount: account,
    });
  } catch (error) {
    res.send("error when load page");
    return;
  }
};

module.exports.changeAccount = async (req, res, next) => {
  const form = new formidable.IncomingForm({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.send("error " + err);
      return;
    }
    let newInfor = fields;

    await upload.uploadFile(Array(files.avatar_image), async (err, url) => {
      if (err) {
        res.send("error happen when upload avatar image" + err);
        return;
      }

      if (url) {
        newInfor.avatar_image = url[0];
      }
      try {
        const isSucess = await userService.modifyAccount(newInfor);
        let result = "";
        let userAccount = await userService.getAccount(newInfor._id);
        delete userAccount.password;

        if (isSucess) {
          result = "Lưu thành công";
        } else {
          result = "Có lỗi trong quá trình lưu";
        }

        res.render("pages/accountManagement", {
          userAccount: userAccount,
          result: result,
        });
      } catch (error) {
        res.render("pages/accountManagement", {
          userAccount: newInfor,
          result: "error when get user information",
        });
      }
    });
  });
};

