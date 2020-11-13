module.exports.index =  function(req, res, next) {
  res.render('index', { title: 'Home' });
};

module.exports.login =  function(req, res, next) {
 res.render('login/login', { title: 'Login' });
};

module.exports.register = function(req, res, next) {
 res.render('register/register', { title: 'Register' });
}

module.exports.bookShop = function(req, res, next){
  res.render('./book/bookShop', {title:"book shop"})
}