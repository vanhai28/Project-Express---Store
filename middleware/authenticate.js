module.exports = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectTo = req.originalUrl;
        res.redirect('/user/login')
    }
    next();
}