const reviewModel = require("../model/reviewModel");
const reviewMongoose = require("../model/reviewModel");

const numPagePerPagination = 4;
MAX_NUMBER_PAGE = 9;

exports.getReviewsByBookId = async (bookId) => {
  const reviews = await reviewModel.find({ bookID: bookId }).lean();
  return reviews;
};

module.exports.listReview = async (filter, pageNumber, itemPerPage) => {
  let listReview = await reviewMongoose.paginate(filter, {
    page: pageNumber,
    limit: itemPerPage,
  });
  return listReview;
};

exports.addReview = async (reviewInfo) => {
  const bookId = reviewInfo.bookID;
  const content = reviewInfo.content;
  const user_name = reviewInfo.user_name;
  const date = Date.now();
  const review = new reviewModel({
    bookID: bookId,
    content: content,
    user_name: user_name,
    date: date,
  });
  review.save();
};

module.exports.listReview = async (filter, pageNumber, itemPerPage) => {
  let listBook = await reviewMongoose.paginate(filter, {
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
