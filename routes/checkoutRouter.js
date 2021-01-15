const express = require("express");
const checkoutService = require("../service/checkoutService");
const checkoutController = require("../controllers/checkoutController");
const auth = require("../middleware/authenticate");

const router = express.Router();

router.get("/", auth.isLogin, (req, res) => {
  res.render("pages/orders/checkout", {
    title: "Checkout",
  });
});

module.exports = router;

router.post("/", checkoutController.submitCheckout);
