const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const validAcc = require("../middleware/validAcount");
const auth = require("../middleware/authenticate");

/* GET users listing. */

// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/register", userController.getRegister);

router.post("/register", validAcc.validAccount, userController.postRegister);

router.get("/login", userController.getLogin);

router.post("/login", authController.postLogin, auth.isVerify);

router.get("/account", userController.getAccount);

router.post("/account", userController.postAccount);

router.get("/password", auth.isLogin, userController.getPassword);

router.post("/password", validAcc.checkPassword, userController.postPassword);

router.get("/verify", userController.getVerify);

router.post("/verify", userController.postVerify);

router.get("/forget-password", userController.getForgetPassword);

router.post("/forget-password", userController.postForgetPassword);

router.get("/logout", userController.getLogout);

/**
 * APIs
 */
router.post("/api/add/follower", userController.APIaddFollower);

module.exports = router;
