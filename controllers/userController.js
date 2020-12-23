const formidable = require("formidable");
const upload = require("../service/uploadFile");
const userService = require("../model/userService");
const { model } = require("../model/mongooseModel/userMongooseModel");

module.exports.getRegister = function (req, res) {
  res.render("pages/register", { title: "Register" });
};

exports.postRegister = async function (req, res) {
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

module.exports.getLogin = function (req, res) {
  res.render("pages/login", { title: "Login" });
};

module.exports.getAccount = async function (req, res) {
  const user = req.user;
  try {
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

module.exports.postAccount = async (req, res, next) => {
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
          result: "Đã xảy ra lỗi khi lấy thông tin người dùng",
        });
      }
    });
  });
};

module.exports.getPassword = (req, res) =>{
  res.render("pages/passwordChange", { title: "Change Password" });
}

module.exports.postPassword = (req, res)=>{
  const new_password = req.body.new_password;
  const id = req.user._id;
  try{
    userService.changePassword(id, new_password);
    res.render('pages/passwordChange',{
      title: 'Change Password',
      result: 'Thay đổi mật khẩu thành công'
    })
    }catch(err){
      res.render("pages/passwordChange",{
        title: 'Change Password',
        result: 'Thay đổi mật khẩu không thành công'
      });
    }
}

module.exports.getVerify = (req, res) =>{
  userService.sendVerifyEmail(req.user);
  res.render('pages/verify', {title: 'Verify'});
}

module.exports.postVerify = (req, res) => {
  const {verifyToken} = req.body;
  const user = req.user;
  const isValid = userService.checkVerifyToken(verifyToken);
  if(!isValid){
    res.render('pages/verify',{
      title: 'Verify',
      message: 'Mã xác thực không hợp lệ'
    });
  }

  try{
    userService.verify(user._id);
  }catch(err){
    console.log(err);
  }
  res.redirect('/');  
}

module.exports.getLogout = (req, res) =>{
  req.logout();
  res.redirect(req.headers.referer);
}



