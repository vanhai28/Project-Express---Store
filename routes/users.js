const express = require("express");
const router = express.Router();
const controllerDef = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const validAcc = require("../middleware/validAcount");
const passport = require('../passport');

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", userController.register);

router.post("/register", validAcc.validAccount, userController.addUser);

router.get("/login", userController.login);

router.post("/login", passport.authenticate('local'),
  (req, res) => {
    const url = req.session.redirectTo || '/';
    delete req.session.redirectTo;
    res.redirect(url);
  });

router.get("/account", userController.account);

router.post("/account", userController.changeAccount);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect(req.headers.referer);
});

module.exports = router;
