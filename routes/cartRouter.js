const express = require("express");
// const reviewController = require("../controllers/reviewController");
const bookService = require('../model/bookService')
const router = express.Router();

router.get('/',(req, res) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('pages/cart');
})

router.post("/", async (req, res, next) => {
    let bookId = req.body.id;
    let quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    
    try{
        const book = await bookService.getBookById(bookId);

        const cartItem = await req.session.cart.add(book, bookId, quantity);
        res.locals.cart = cartItem;
        res.json(cartItem);
    }
    catch (err) {
        res.render("pages/cart", {
            title: "Error with your cart",
            err: "Can't add this item to your cart",
          });
        return;
    }
})

router.put('/', (req, res)=>{
    let productId = req.body.id;
    let quantity = parseInt(req.body.quantity);
    let cartItem = req.session.cart.update(productId, quantity);
    res.json(cartItem);
});

router.delete('/', (req, res)=>{
    let productId = req.body.id;
    let cartItem = req.session.cart.remove(productId);
    res.json({
        totalQuantity: req.session.cart.totalQuantity,
        totalPrice: req.session.cart.totalPrice
    })
})
module.exports = router;