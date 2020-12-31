module.exports.isLogin = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectTo = req.originalUrl;
        res.redirect('/user/login')
    }
    next();
}

module.exports.isVerify = (req, res) =>{
    if(req.user.isVerify == false){
        return res.redirect('/user/verify');
    }
    const url = req.session.redirectTo || '/';
    delete req.session.redirectTo;
    res.redirect(url);
}