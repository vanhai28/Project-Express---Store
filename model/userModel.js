const bcrypt = require("bcrypt");

const userMongooseModel = require("./mongooseModel/userMongooseModel");

exports.addUser = async (newUser) => {
  //---------- Add user into database ---------
  const saltRounds = 10;

  await bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      let user = new userMongooseModel({
        user_name: newUser.user_name,
        user_email: newUser.user_email,
        password: hash,
        status: "active",
        first_name: "",
        last_name: "",
        avartar_image: "",
      });

      user
        .save()
        .then((doc) => {})
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
    console.log(err);
    return null;
  }

  return account;
};

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
