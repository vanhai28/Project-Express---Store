const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validAcc = require("../middleware/validAcount");

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", validAcc.validAccount, userController.addUser);

router.get("/account", userController.account);

router.post("/account", userController.changeAccount);

// router.get("/user/account", userController.account);

module.exports = router;
