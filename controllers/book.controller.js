const bookModel = require('../model/bookModel');

module.exports.bookShop = function(req, res, next){
  const page = parseInt(req.query.page) || 1;
  const pagination = bookModel.pagination(page);
   const prevPage = bookModel.prevPage(pagination[0].number);
   const nextPage = bookModel.nextPage(pagination[0].number);

  res.render('./book/bookShop', 
      { title:"Book shop", 
        books :bookModel.getDisplayedBook(page),
        pagination: pagination,
        prevPage:prevPage,
        nextPage: nextPage,
        page:page 
      }
  )
};

module.exports.bookDetail = function(req, res, next){
  const array = bookModel.listBook();

   const f = array.find(x => x.ID_book == req.params.id );
   res.render('./book/bookDetail', 
   { title:"Detail", book_name: f.book_name, current_cost: f.current_cost});
}

// module.exports.bookDetail = async (req, res) => {
//   var courses = await Courses.find().lean();
//   coursesRender = courses.map(function (item) {
//       item._id = item._id.toString();
//       return item;
//   })
//   console.log(req.params.page);
//   console.log(req.params.name);
//   if (req.params.page ) {
//       coursesRender = coursesRender.filter( x => x.categoryId === req.params.name);
//       coursesRender = coursesRender.filter( x => x.topicId === req.params.page);
      
//   }
//   if(req.query.topic)
//   {
//       if (req.query.sort === 'price_reduction') {
//           coursesRender.sort(function (a, b) { return b.price - a.price });
//       } else if (req.query.sort === 'price_increase') {
  
//           coursesRender.sort(function (a, b) { return a.price - b.price });
//       } 
//   }
//   res.render('courses.hbs', {
//       user: {
//           sourse: "My Courses",
//       },
//       title: req.params.page,
//       courses: coursesRender,
//       sortCategory: req.params.name,
//       sortTopic: req.params.page
//   });
// };
