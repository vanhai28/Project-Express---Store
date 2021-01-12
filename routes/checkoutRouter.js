const express = require("express");
const checkoutService = require("../service/checkoutService");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/checkout");
});

module.exports = router;

router.post("/", (req, res) =>{
  const firstName = req.body.customer_first_name;
  const lastName = req.body.customer_last_name;
  const customer = firstName + ' ' + lastName;
  const company = req.body.customer_company;
  const city = req.body.customer_city;
  const address = req.body.customer_address;
  const phone = req.body.customer_phone;
  const email = req.body.customer_email;
  const cart = req.session.cart;
  res.render("pages/checkoutSubmitting", {
    title: "Xác nhận mua hàng",
  });

  checkoutService.sendCheckoutEmail(customer,address,phone,email, cart);
})