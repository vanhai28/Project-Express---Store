const orderService = require("../service/orderService");
const checkoutService = require("../service/checkoutService");
const bookService = require("../service/bookService");

exports.submitCheckout = async (req, res) => {
  const firstName = req.body.customer_first_name;
  const lastName = req.body.customer_last_name;
  const customerName = firstName + " " + lastName;
  const company = req.body.customer_company;
  const address = req.body.customer_address;
  const phone = req.body.customer_phone;
  const email = req.body.customer_email;
  const cart = req.session.cart;
  const user = req.user;

  if (user.status == "blocked") {
    return res.render("pages/orders/checkout", {
      title: "Checkout",
      message: "error",
    });
  }
  //customer
  const customer = {
    customerID: user._id,
    nameCustomer: customerName,
    address: address,
    phone: phone,
  };

  try {
    checkoutService.sendCheckoutEmail(customer, address, phone, email, cart);
    await orderService.saveOrderToDB(customer, cart);
  } catch (error) {
    console.log(error);
  }

  await bookService.updateBestSaler();

  //reset cart
  req.session.cart.empty();
  return res.render("pages/orders/checkoutSubmitting", {
    title: "Xác nhận mua hàng",
  });
};
