const express = require("express");
// const reviewController = require("../controllers/reviewController");
const router = express.Router();

router.get('/',(req, res) => {
    res.render('pages/checkout');
})

module.exports = router;