'use strict';
const numberService = require("../service/numberService");

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.address = oldCart.address || {};
    this.paymentMethod = oldCart.paymentMethod || "COD";
    this.totalCost = oldCart.totalCost || 0;
    this.shipTK = oldCart.shipTK || false;
    this.shipCost = oldCart.shipCost || parseFloat(80000);

    this.getTotalQuantity = () => {
        var quantity = 0;
        for (var id in this.items) {
            quantity += parseInt(this.items[id].quantity);
        }
        return quantity;
    };

    this.getTotalPrice = () => {
        var price = 0;
        for (var id in this.items) {
            price += parseFloat(this.items[id].price);
        }
        price = (price);
        return price;
    };

    this.getTotalCost = () => {
        let cost = parseFloat(this.shipCost) + parseFloat(this.totalPrice);
        return parseFloat(cost);
    }

    this.setShip = (value) =>{
        this.shipTK = !(this.shipTK);
        let shipCost = parseFloat(value);
        this.shipCost = shipCost;
        this.totalCost = this.getTotalCost();
    }

    this.add = (item, id, quantity) => {
        var storedItem = this.items[id];
        if (!storedItem) {
            this.items[id] = { item: item, quantity: 0, price: 0 };
            storedItem = this.items[id];
        }
        storedItem.item.price = parseFloat(storedItem.item.price);
        storedItem.quantity += parseInt(quantity);
        storedItem.price = parseFloat(storedItem.item.price * storedItem.quantity);
        this.totalQuantity = this.getTotalQuantity();
        this.totalPrice = this.getTotalPrice();
        this.totalCost = this.getTotalCost();
        return this.getCartItem(id);
    };

    this.remove = (id) => {
        var storedItem = this.items[id]; 
        if (storedItem) {
            delete this.items[id];
            this.totalQuantity = this.getTotalQuantity();
            this.totalPrice = this.getTotalPrice();
            this.totalCost = this.getTotalCost();
        }
    };

    this.update = (id, quantity) => {
        var storedItem = this.items[id];
        if (storedItem && quantity >= 1) {
            storedItem.quantity = quantity;
            storedItem.price = (storedItem.item.price * storedItem.quantity)*1000;
            this.totalQuantity = this.getTotalQuantity();
            this.totalPrice = this.getTotalPrice();
            this.totalCost = this.getTotalCost();
        }
        return this.getCartItem(id);
    };

    this.empty = () => {
        this.items = {};
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.totalCost =0;
    };

    this.generateArray = () => {
        var arr = [];
        for (var id in this.items) {
            var itemPrice = numberService.formatNumber(this.items[id].item.price);
            var price = numberService.formatNumber(this.items[id].price);
            this.items[id].item.price = (itemPrice);
            this.items[id].price = (price);
            arr.push(this.items[id]);
        }
        return arr;
    };

    this.getCart = function() {
        var totalPrice = numberService.formatNumber(this.totalPrice);
        var cart = {
            items: this.generateArray(),
            totalQuantity: this.totalQuantity,
            totalPrice: totalPrice,
            address: this.address,
            paymentMethod: this.paymentMethod
        };
        return cart;
    }

    this.getCartItem = function(id) {
        var totalPrice = numberService.formatNumber(this.totalPrice);
        var cartItem = {
            item: this.items[id],
            totalQuantity: this.totalQuantity,
            totalPrice: totalPrice,
        }
        return cartItem;
    }
};