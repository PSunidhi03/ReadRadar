// backend/routes/reviews.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.addReview);
router.get('/book/:id', reviewController.getBookReviews);

module.exports = router;
