const followerModel = require("../model/followersModel");
const mailer = require("../misc/mailer");

module.exports.addFollower = async (email) => {
  if (!email) {
    return -1;
  }

  //check exist follower with the same email
  let isExist = await followerModel.find({ email: email });

  if (isExist.length > 0) {
    return 0;
  }

  let follower = new followerModel({ email: email });

  await follower.save();
  return 1;
};

module.exports.sendEmailIntroToFollower = async (email) => {
  let content = `Chào bạn,
  <br/>
  Chào mừng bạn đến với Bookstore. Cảm ơn bạn đã đăng ký theo dõi BookStore. Mọi thông tin về
  sản phẩm mới nhất mà bạn quan tâm sẽ được gửi đến bạn.
  <br/>
  Chúc bạn một ngày tốt lành.
  <br/><br/>
  Xin chân thành cảm ơn,
  <br/>
  Bookstore
  `;
  await mailer.sendEmail(
    "admin@bookstore.com",
    email,
    "Chào mừng đến với BookStore",
    content
  );
};
