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
