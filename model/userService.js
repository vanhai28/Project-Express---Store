const bcrypt = require("bcrypt");
const { use } = require("passport");

const userMongooseModel = require("./mongooseModel/userMongooseModel");

exports.addUser = async (newUser) => {
  //---------- Add user into database ---------
  const saltRounds = 10;
  const defaultAvt ='https://res.cloudinary.com/dzhnjuvzt/image/upload/v1608481217/user/dafault.png';
  await bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      let user = new userMongooseModel({
        user_name: newUser.user_name,
        user_email: newUser.user_email,
        password: hash,
        status: "active",
        first_name: "",
        last_name: "",
        avatar_image: defaultAvt,
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

module.exports.getUser = (id)=>{
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
module.exports.checkCredential = async(user_name, password)=>{
  const user = await userMongooseModel.findOne({user_name: user_name});
  if(!use)
    return false;
  
  let checkPassword = await bcrypt.compare(password, user.password);
  if (checkPassword){
    return user;
    return false;
  }

}

