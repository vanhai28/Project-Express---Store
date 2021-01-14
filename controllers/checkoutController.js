const mongoose = require("mongoose");

const orderService = require("../service/orderService");
const checkoutService = require("../service/checkoutService");

exports.submitCheckout = async (req, res) => {

    const firstName = req.body.customer_first_name;
    const lastName = req.body.customer_last_name;
    const customerName = firstName + ' ' + lastName;
    const company = req.body.customer_company;
    const address = req.body.customer_address;
    const phone = req.body.customer_phone;
    const email = req.body.customer_email;
    const cart = req.session.cart;
    const user = req.user;

    //customer
    const customer = {
        customerID: user._id,
        nameCustomer: customerName,
        address: address,
        phone: phone,
    }
    
    await orderService.saveOrderToDB(customer,cart);

    //reset cart
    req.session.cart.empty();
    res.render("pages/checkoutSubmitting", {
    title: "Xác nhận mua hàng",
    });

    await checkoutService.sendCheckoutEmail(customer,address,phone,email, cart);
};


