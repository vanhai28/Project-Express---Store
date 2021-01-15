const mailer = require("./mailerService");
const numberService = require("../service/numberService");

module.exports.sendCheckoutEmail = async (customer, address, phone, userEmail, cart) => {

    let html = `Chào ${customer.nameCustomer},
    <br/>
    Cảm ơn bạn đã mua hàng tại Bookstore. 
    <br/>
    Đây là hóa đơn của bạn:
    <br/>
    Tên khách hàng: <b>${customer.nameCustomer}</b>
    <br/>
    Địa chỉ: ${address}
    <br/>
    Số điện thoại: ${phone}
    <br/>

    <h3>CHI TIẾT ĐƠN HÀNG</h3>
    <br/> `;

    for(var id in cart.items){
        let item = cart.items[id];
        html+=`
        <div>
        <img src="${item.item.cover}" style="width: 200px; height: 200px; text-align: left"/>
        <h4> ${item.item.title} x ${item.quantity}</h4>
        <span> ${numberService.formatNumber(item.price)} Đ</span>
        </div>
        <br/>
        `
    };

    html+=`
    <p><b>Phí vận chuyển</b>: ${numberService.formatNumber(cart.shipCost)} VNĐ</p>
    <p style="color:red"></b>Tổng tiền<b>: ${numberService.formatNumber(cart.totalCost)} VNĐ</p>
    <br/>
    `;
    html +=`Vui lòng không trả lời Email này.
    <br/>
    Xin chân thành cảm ơn,
    <br/>
    Bookstore`;

   await mailer.sendEmail(
      "admin@bookstore.com",
      userEmail,
      "Xác nhận mua hàng tại BookStore",
      html
    );
  };

