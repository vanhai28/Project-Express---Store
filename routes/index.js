const express = require("express");
const router = express.Router();
const controllerDef = require("../controllers/pagesController");
const bookController = require("../controllers/bookController");

/* GET home page. */
router.get("/", controllerDef.index);

router.get("/about-us", controllerDef.aboutUs);

// router.get("/cart", controllerDef.cart);

router.get("/checkout", controllerDef.checkout);

router.get("/contact", controllerDef.contact);

router.get("/faq", controllerDef.faq);

router.get("/book-shop", bookController.bookShop);

router.get("/book-detail/:id", bookController.bookDetail);


module.exports = router;
// router.get('/book-detail/:page', (req, res, next) => {
//     //console.log(req.params.page);
//    var array = bookModel.listBook();
