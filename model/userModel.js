const bcrypt = require("bcrypt");
// const { delete } = require("../routes");

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
    account = await userMongooseModel.findOne({ _id: id });
  } catch (error) {
    console.log(err);
    return null;
  }

  return account;
}

module.exports.modifyAccount = async (account) => {
  try {
    if (!account.image) delete account.image;
    console.log(account.user_name);
    await userMongooseModel.findOneAndUpdate({user_name: account.user_name}, account);

  } catch (error) {
    console.log(error);
    return false;
  }
  return true
}