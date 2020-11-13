const express = require('express');
const router = express.Router();
const controllerDef = require('../controllers/controller.default');
const bookController = require('../controllers/book.controller')
/* GET home page. */
router.get('/',controllerDef.index);

router.get('/login',controllerDef.login);

router.get('/register', controllerDef.register);

router.get('/book-shop', bookController.bookShop)

module.exports = router;
