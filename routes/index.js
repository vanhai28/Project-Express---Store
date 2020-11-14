const express = require('express');
const router = express.Router();
const controllerDef = require('../controllers/controller.default');
const bookController = require('../controllers/book.controller');
const bookModel = require('../model/bookModel');
const { render } = require('../app');
/* GET home page. */
router.get('/',controllerDef.index);

router.get('/login',controllerDef.login);

router.get('/register', controllerDef.register);

router.get('/book-shop', bookController.bookShop);

router.get('/book-detail/:id', bookController.bookDetail);
// router.get('/book-detail/:page', (req, res, next) => {
//     //console.log(req.params.page);
//    var array = bookModel.listBook();

//    var f = array.find(x => x.ID_book == req.params.page );
//    res.render('./book/bookDetail', 
//    { title:"Book shop", book_name: f.book_name, current_cost: f.current_cost});
    
// });
module.exports = router;
