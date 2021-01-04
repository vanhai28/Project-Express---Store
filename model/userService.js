const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const userMongooseModel = require("./mongooseModel/userMongooseModel");
const mailer = require('../misc/mailer');
exports.addUser = async (newUser) => {
  //---------- Add user into database ---------
  const saltRounds = 10;
  const defaultAvt = 'https://res.cloudinary.com/dzhnjuvzt/image/upload/v1608481217/user/dafault.png';
  await bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      let user = new userMongooseModel({
        user_name: newUser.user_name,
        user_email: newUser.user_email,
        password: hash,
        status: "active",
        first_name: "",
        last_name: "",
        isVerify: false,
        verify_token: "",
        phone_number: "",
        avatar_image: defaultAvt,
      });

      user
        .save()
        .then((doc) => { })
        .then((err) => {
          console.log(err);
        });
    });
  });

  return;
};

module.exports.getAccount = async (id) => {
  let account;
  try {
    account = await userMongooseModel.findOne({ _id: id }).lean();
  } catch (error) {
    console.log(error);
    return null;
  }
  return account;
};

module.exports.getUser = (id) => {
  return userMongooseModel.findOne({ _id: id });
}

module.exports.modifyAccount = async (account) => {
  try {
    if (!account.avatar_image) delete account.avatar_image;

    await userMongooseModel.findByIdAndUpdate(account._id, account);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

/**
 * Check for valid username and password, Return user's infor if it's valid
 * @param {*} user_name 
 * @param {*} password 
 */
module.exports.checkCredential = async (user_name, password) => {
  const user = await userMongooseModel.findOne({ user_name: user_name });
  if (!user)
    return false;

  let checkPassword = await bcrypt.compare(password, user.password);
  if (checkPassword) {
    return user;
  }
  return false;
}

module.exports.changePassword = async (id, password) => {
  const saltRounds = 10;
  await bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      await userMongooseModel.updateOne({ _id: id }, { password: hash });
    })
  })
}

module.exports.checkVerifyToken = async (verifyToken) => {
  return await userMongooseModel.findOne({ verify_token: verifyToken });
}

module.exports.verify = async (id) => {
  await userMongooseModel.updateOne({ _id: id }, { isVerify: true, verify_token: "" });
}

module.exports.sendVerifyEmail = async (user) => {
  const verifyToken = randomstring.generate(7);
  const userEmail = user.user_email;
  await userMongooseModel.updateOne({ _id: user._id }, { verify_token: verifyToken });
  const html = `Chào bạn,
  <br/>
  Cảm ơn bạn đã đăng ký tài khoản tại Bookstore. Đây là email được gửi để xác thực tài khoản của bạn.
  <br/>
  Mã xác thực: <b>${verifyToken}</b>
  <br/>
  Vui lòng nhập mã trên tại trang xác thực.
  <br/><br/>
  Xin chân thành cảm ơn,
  <br/>
  Bookstore
  `;
  await mailer.sendEmail('admin@bookstore.com', userEmail, 'Xác thực Email', html);
}

module.exports.sendForgetPasswordEmail = async (email) => {
  const newPassword = randomstring.generate(10);
  const userEmail = email;

  const saltRounds = 10;
  await bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(newPassword, salt, async (err, hash) => {
      await userMongooseModel.updateOne({ user_email: email }, { password: hash });
    })
  })

  const html = `Chào bạn,
  <br/>
  Mật khẩu tài khoản của bạn đã được reset.
  <br/>
  Mật khẩu mới: <b>${newPassword}</b>
  <br/>
  Vui lòng mật khẩu mới để tiếp tục sử dụng dịch vụ của chúng tôi.
  <br/><br/>
  Xin chân thành cảm ơn,
  <br/>
  Bookstore
  `;
  await mailer.sendEmail('admin@bookstore.com', userEmail, 'Reset Mật khẩu', html);
}

module.exports.checkUsernameAndEmail = (username, email) => {
  return userMongooseModel.findOne({ user_name: username, user_email: email });
}


