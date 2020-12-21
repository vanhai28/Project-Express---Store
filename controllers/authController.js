const passport = require('../passport');

module.exports.authLoginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, infor)=>{
    if(err){
      return next(err);
    }

    if(!user){
      return res.render('pages/login',{
        title: 'Login',
        err: 'Username hoặc mật khẩu không chính xác'
      })
    }

    req.logIn(user, (err)=>{
      if (err){
        return next(err);
      }
      const url = req.session.redirectTo || '/';
      delete req.session.redirectTo;
      return res.redirect(url);
    });
  })(req, res, next);
}

// exports.authLoginUser = async (req, res, next) => {
//   const emailOrUserName = req.body.emailOrUserName;

//   const pass = req.body.password;
//   const err = await authService.authLoginAcc(emailOrUserName, pass);

//   if (err) {
//     res.render("pages/login", { title: "Login", err: err });
//   } else {
//     res.redirect("/");
//   }
// };




