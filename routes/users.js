const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const validAcc = require("../middleware/validAcount");
const auth = require('../middleware/authenticate');

/* GET users listing. */

// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/register", userController.register);

router.post("/register", validAcc.validAccount, userController.addUser);

router.get("/login", userController.login);

router.post('/login', authController.authLoginUser);

router.get("/account", userController.account);

router.post("/account", userController.changeAccount);

router.get("/password", auth, userController.password);

router.post('/password', validAcc.checkPassword, userController.changePassword);

router.get('/logout', userController.logout);

module.exports = router;
