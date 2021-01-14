const mongoose = require('mongoose') ;

const orderSchema = new mongoose.Schema({
    customerID: mongoose.Schema.Types.ObjectId,
    nameCustomer: String,
    address: String,
    phone: String,
    date: Date,
    bill: {
        product: Array,
        costBeforAddShippingCost: Number,
        shipping_cost: Number,
        costAfterAddShippingCost: Number,
    },
    isSuccess: Boolean,
},
  { collection: "orders" }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

