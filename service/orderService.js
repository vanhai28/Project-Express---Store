const mongoose = require('mongoose');
const orderModel = require("../model/orderModel");
const bookService = require("./bookService");
const numberService = require("../service/numberService");

exports.getOrderByUserId = async (userId) => {
    let orders = await orderModel.find({ customerID: userId }).lean();
    orders = orders.map((order) => {
        return {
            customerID: order.customerID,
            nameCustomer: order.nameCustomer,
            address: order.address,
            phone: order.phone,
            date: order.date,
            bill: {
                product: order.bill.product,
                costBeforAddShippingCost: numberService.formatNumber(order.bill.costBeforAddShippingCost),
                shipping_cost: numberService.formatNumber(order.bill.shipping_cost),
                costAfterAddShippingCost: numberService.formatNumber(order.bill.costAfterAddShippingCost) ,
            },
            isSuccess: order.isSuccess,
        };
    });
    return orders.sort((a, b) => b.date - a.date);
};

module.exports.saveOrderToDB = async (customer, cart) => {

    const totalPrice = cart.totalPrice;
    const shipCost = cart.shipCost;
    const totalCost = cart.totalCost;

    const product = [];
    for (var id in cart.items) {
        let temp = {};
        temp.price = cart.items[id].price;
        temp.quantity = cart.items[id].quantity;
        temp.item = cart.items[id].item;
        product.push(temp);

        await bookService.updateOrder(temp.item._id, temp.quantity);
    }

    const bill = {
        product: product,
        costBeforAddShippingCost: parseInt(totalPrice) * 1000,
        shipping_cost: parseInt(shipCost),
        costAfterAddShippingCost: parseInt(totalCost) * 1000,
    };
    //////
    const order = new orderModel({
        customerID: mongoose.Types.ObjectId(customer.customerID),
        nameCustomer: customer.name,
        address: customer.address,
        phone: customer.phone,
        bill: bill,
        date: Date.now(),
        isSuccess: false,
    });
    return await order.save();
};

module.exports.submitRecieving = async (orderID) => {
    await orderModel.updateOne({ _id: orderID }, { isSuccess: true });
}