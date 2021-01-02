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