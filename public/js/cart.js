$(document).ready(() => {
    $('.add-to-cart').on('click', addToCart);
});

function addToCart() {
    const id = $(this).data('id');
    let quantity = 1;
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: { id, quantity },
        success: function (result) {
            const totalPrice = formatNumber(result.totalPrice);
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(totalPrice);
        }
    })
}

function addItemsToCart(id, quantity) {
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: { id, quantity },
        success: function (result) {
            const totalPrice = formatNumber(result.totalPrice);
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(totalPrice);
        }
    })
}

function updateCart(id, quantity) {
    if (quantity <= 0) {
        removeCartItem(id);
    }
    else {
        updateCartItem(id, quantity);
    }
}

function removeCartItem(id) {
    $.ajax({
        url: '/cart',
        type: 'DELETE',
        data: { id },
        success: function (result) {
            const totalPrice = formatNumber(result.totalPrice);
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(totalPrice);
            $('#total-price').html(result.totalPrice + ' VNĐ');
            $(`#item${id}`).remove();
        }
    })
}

function updateCartItem(id, quantity) {
    $.ajax({
        url: '/cart',
        type: 'PUT',
        data: { id, quantity },
        success: function (result) {
            const totalPrice = formatNumber(result.totalPrice);
            const itemPrice = formatNumber(result.item.price);

            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(totalPrice);
            $('#total-price').html(totalPrice + ' VNĐ');
            $(`#price${id}`).html(itemPrice);
        }
    })
}

function clearCart() {
    $.ajax({
        url: '/cart/all',
        type: 'DELETE',
        success: function(result){
            $('#cart-total-quantity').html(0 + ' món');
            $('#cart-total-price').html(0);
            $('#cart-badge').html(0);
            $('#cart-body').html('');
            $('#total-price').html(0 + ' VNĐ');
        }
    })
}

function updateShip(value) {
    let ship = (value);
    $.ajax({
        url: '/cart/ship',
        type: 'PUT',
        data: { value },
        success: function (result) {
            $('#total-cost').html(result.totalCost + ' VNĐ');
        }
    })
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
