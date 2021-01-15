const bookMongoose = require("../model/bookModel");
const categoryMongoose = require("../model/categoryModel");
const reviewMongoose = require("../model/reviewModel");
const numPagePerPagination = 4;
MAX_NUMBER_PAGE = 9;
const TOP_BESTSELLER = 10;

module.exports.listBook = async (filter, pageNumber, itemPerPage) => {
  let listBook = await bookMongoose.paginate(filter, {
    page: pageNumber,
    limit: itemPerPage,
  });

  return listBook;
};

module.exports.listSortedBook = async (sortType, pageNumber, itemPerPage) => {
  let listBook = await bookMongoose.paginate(
    { isDelete: false },
    {
      sort: { price: sortType },
      page: pageNumber,
      limit: itemPerPage,
    }
  );
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

module.exports.getCategory = async () => {
  return await categoryMongoose.find({}).lean();
};

module.exports.getReviewOfBook = async (bookId) => {
  return await reviewMongoose.find({ bookID: bookId }).lean();
};

module.exports.getBookById = async (bookId) => {
  return await bookMongoose.findOne({ _id: bookId });
};

module.exports.updateOrder = async (bookId, quantity) => {
  const book = await this.getBookById(bookId);
  const orderNum = book.orders;
  const newOrder = orderNum + quantity;
  await bookMongoose.updateOne({ _id: bookId }, { orders: newOrder });
};

module.exports.increaseView = async (id) => {
  const book = await bookMongoose.findById(id);
  const view = book.views;
  try {
    return await bookMongoose.findOneAndUpdate(
      { _id: id },
      { views: view + 1 }
    );
  } catch (error) {
    console.log(error);
  }
};
/**
 * Update lastest top bestseller
 */
module.exports.updateBestSaler = async () => {
  // Get current bestseller book
  let currentBestSeller = await bookMongoose.find({ best_seller: true });

  // Reset best_seller status by false
  for (let index = 0; index < currentBestSeller.length; index++) {
    const element = currentBestSeller[index];
    await bookMongoose.findByIdAndUpdate(element._id, { best_seller: false });
  }

  //get latest TOP 10 book that sells in very large numbers
  let listBook = await bookMongoose.paginate(
    { isDelete: false },
    {
      sort: { orders: "desc" },
      page: 1,
      limit: TOP_BESTSELLER,
    }
  );

  //update latest TOP 10 bestseller
  listBook.docs.forEach(async (element) => {
    let res = await bookMongoose.findByIdAndUpdate(element._id, {
      best_seller: true,
    });
  });
};
