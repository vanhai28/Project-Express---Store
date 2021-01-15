const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderCODE: String,
    customerID: mongoose.Schema.Types.ObjectId,
    nameCustomer: String,
    address: String,
    phone: String,
    date: String,
    bill: {
      product: Array,
      costBeforAddShippingCost: Number,
      shipping_cost: Number,
      costAfterAddShippingCost: Number,
    },
    isSuccess: Boolean,
    order_status: String,
  },
  { collection: "orders" }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
