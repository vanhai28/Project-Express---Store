const bookMongoose = require("./mongooseModel/bookMongooseModel");
const categoryMongoose = require("../model/mongooseModel/categoryMongooseModel");
const reviewMongoose = require("../model/mongooseModel/reviewMongooseModel");
const numPagePerPagination = 4;
MAX_NUMBER_PAGE = 9; 



module.exports.listBook = async (filter, pageNumber, itemPerPage) => {  
  let listBook = await bookMongoose.paginate(filter,{
    page: pageNumber,
    limit: itemPerPage,
  });
  return listBook;
};

module.exports.listSortedBook = async (sortType, pageNumber, itemPerPage) => {  
  let listBook = await bookMongoose.paginate({},{
    sort: {price: sortType},
    page: pageNumber,
    limit: itemPerPage,
  });
  return listBook;
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


module.exports.getRelatedBook = async () => {
  let listBook = await this.listBook();
  return listBook.slice(0, 6);
};

module.exports.getUpsellProduct = async () => {
  let listBook = await this.listBook();
  return listBook.slice(10, 16);
};

module.exports.getBookByCategory = async (category, number = 0) => {
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

module.exports.getCategory = async () =>{
  return await categoryMongoose.find({}).lean();
}

module.exports.getReviewOfBook = async (bookId) =>{
  return await reviewMongoose.find({ bookID: bookId }).lean();
}

module.exports.getBookById = async (bookId) =>{
  return await bookMongoose.findOne({ _id: bookId });
}
