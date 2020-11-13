const express = require('express');
const router = express.Router();
const controllerDef = require('../controllers/controller.default');

/* GET home page. */
router.get('/',controllerDef.index);

router.get('login/login',controllerDef.login);

router.get('/register', controllerDef.register);

router.get('/book-shop', controllerDef.bookShop)

module.exports = router;
