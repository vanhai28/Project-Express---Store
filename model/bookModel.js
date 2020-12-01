const numPagePerPagination = 4;
MAX_NUMBER_PAGE = 9; //this is got by API
const bookMongoose = require("./mongooseModel/bookMongooseModel");
// const bestSeller = require("./mongooseModel/bestSellerMongoose");

module.exports.listBook = async () => {
  let listBook = await bookMongoose.find({});
  return listBook;
};

module.exports.getDisplayedBook = (page) => {
  const bookList = this.listBook();
  const productPerPage = 12;
  const startIndex = (page - 1) * productPerPage;
  const endIndex = page * productPerPage;

  return bookList.slice(startIndex, endIndex);
};

module.exports.pagination = (page) => {
  let paginationArr = [];

  let temp = 0;

  if (page % numPagePerPagination == 0) {
    temp = numPagePerPagination - 1;

    while (temp >= 0) {
      paginationArr.push({ number: page - temp });
      temp--;
    }

    return paginationArr;
  }

  temp = 1;

  while ((page % numPagePerPagination) - temp >= 0) {
    paginationArr.push({
      number: page - ((page % numPagePerPagination) - temp),
    });
    temp++;
  }

  while (
    temp <= numPagePerPagination &&
    page + (temp - (page % numPagePerPagination)) <= MAX_NUMBER_PAGE
  ) {
    paginationArr.push({
      number: page + (temp - (page % numPagePerPagination)),
    });
    temp++;
  }

  return paginationArr;
};

module.exports.prevPage = (currentMinPage) => {
  if (currentMinPage < numPagePerPagination) {
    return 0;
  }

  return currentMinPage - 1;
};
module.exports.nextPage = (currentMinPage) => {
  if (currentMinPage + numPagePerPagination <= MAX_NUMBER_PAGE) {
    return currentMinPage + numPagePerPagination;
  }

  return 0;
};

module.exports.getNewProduct = async () => {
  let listBook = await this.listBook();
  return listBook.slice(0, 7);
};
// module.exports.getBestSellerBook = async () => {
//   let result = await bestSeller.find({});
//   return result.slice(0, 10);
// };

module.exports.getRelatedBook = () => {
  let listBook = this.listBook();
  return listBook.slice(0, 6);
};

module.exports.getUpsellProduct = () => {
  let listBook = this.listBook();
  return listBook.slice(10, 16);
};

module.exports.getBookByCatory = async (category, number = 0) => {
  let result = await bookMongoose.find({ category: category });

  if (result.length > number) {
    result = result.slice(0, number);
  }

  return result;
};

module.exports.getItemsInPage = (page, ItemList) => {
  const bookList = ItemList;
  const productPerPage = 12;
  const startIndex = (page - 1) * productPerPage;
  const endIndex = page * productPerPage;

  return bookList.slice(startIndex, endIndex);
};
