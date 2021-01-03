$(document).ready(()=>{
    $('.add-to-cart').on('click', addToCart);
});

function addToCart(){
    const id = $(this).data('id');
    let quantity = 1;
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: {id, quantity},
        success: function(result){
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(result.totalPrice);
        }
    })
}

function updateCart(id, quantity){
    if(quantity<=0){
        removeCartItem(id);
    }
    else{
        updateCartItem(id, quantity);
    }
}

function removeCartItem(id){
    $.ajax({
        url: '/cart',
        type: 'DELETE',
        data: {id},
        success: function(result){
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(result.totalPrice);
            $('#total-price').html(result.totalPrice + ' VNĐ');
            $(`#item${id}`).remove();
        }
    })
}

function updateCartItem(id, quantity){
    $.ajax({
        url: '/cart',
        type: 'PUT',
        data: {id, quantity},
        success: function(result){
            $('#cart-badge').html(result.totalQuantity);
            $('#cart-total-quantity').html(result.totalQuantity + ' món');
            $('#cart-total-price').html(result.totalPrice);
            $('#total-price').html(result.totalPrice + ' VNĐ');
            $(`#price${id}`).html(result.item.price);
        }
    })
}