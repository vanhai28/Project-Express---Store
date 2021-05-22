const numberService = require("../service/numberService");
//Hàm trả về mảng chứ các mảng con, mỗi mảng con gồm 2 phần tử trong mảng gốc
// Nhằm mục đích điều chỉnh để phục vụ cho việc render kết quả
exports.modifyArray = (arr) => {
  let len = arr.length;
  len = (len / 2) * 2;

  let retArr = [];

  arr = arr.map((book)=>{
    return{
      _id: book._id,
      cover: book.cover,
      title: book.title,
      old_price: numberService.formatNumber(book.old_price || book.price),
      price: numberService.formatNumber(book.price),
    }
  });


  for (let i = 0; i < len; i++) {
    retArr.push({ data: [arr[i], arr[i + 1]] });
    i = i + 1;
  }

  return retArr;
};
