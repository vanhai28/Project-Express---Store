const passport = require(".././config/passport");
const userService = require("../service/userService");

module.exports.postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, infor) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.render("pages/account/login", {
        title: "Login",
        message: "Username hoặc mật khẩu không chính xác",
      });
    }

    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }

      await userService.updateLastestAccessDate(user._id);
      next();
    });
  })(req, res, next);
};
