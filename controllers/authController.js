const passport = require('.././config/passport');

module.exports.postLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, infor)=>{
    if(err){
      return next(err);
    }

    if(!user){
      return res.render('pages/login',{
        title: 'Login',
        message: 'Username hoặc mật khẩu không chính xác'
      })
    }

    req.logIn(user, (err)=>{
      if (err){
        return next(err);
      }
      next();
    });
  })(req, res, next);
}


