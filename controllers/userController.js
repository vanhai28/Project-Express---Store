const formidable = require("formidable");
const upload = require("../service/uploadFile");

const userModel = require("../model/userModel");

exports.addUser = async function (req, res) {
  const { user_name, user_email, password } = req.body;

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

module.exports.account = async function (req, res, next) {
  const id = req.query.id;
  const account = await userModel.getAccount(id);

  res.render("pages/accountManagement", {
    title: "Account",
    isLogin: true,
    _id: account._id,
    image: account.image,
    user_name: account.user_name,
    user_email: account.user_email,
  });
};

module.exports.changeAccount = async (req, res, next) => {
  // res.send(":");
  const form = new formidable.IncomingForm({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.send("error " + err);
      return;
    }
    let newInfor = fields;

    await upload.uploadFile(Array(files.avatar), async (err, url) => {
      if (err) {
        res.send("error happen when upload avatar image" + err);
        return;
      }

      if (url) {
        newInfor.image = url[0];
      }
      console.log(url[0]);

      const isSucess = await userModel.modifyAccount(newInfor);
      let result = "";

      if (isSucess) {
        result = "Lưu thành công";
      } else {
        result = "Có lỗi trong quá trình lưu";
      }
      res.render("pages/accountManagement", {
        image: newInfor.image,
        isLogin: true,
        user_name: fields.user_name,
        user_email: fields.user_email,
        result: result,
      });
    });
  });
};
