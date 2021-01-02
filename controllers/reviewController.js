const reviewModel = require("../model/reviewService");
const mongoose = require('mongoose');
exports.addReview = async(req, res) => {

    let review = {
        user_name: req.body.user_name,
        bookID: mongoose.Types.ObjectId(req.body.bookID),
        content: req.body.message,
    }

    if(review.user_name =="" || review.content ==""){
        res.redirect('book-detail/'+ req.body.bookID);
    }

    else{
        await reviewModel.addReview(review);
    
        res.redirect('book-detail/'+ req.body.bookID);
    }
    
}