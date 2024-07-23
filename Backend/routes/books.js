const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get book recommendations (example endpoint)
router.get('/recommendations', async (req, res) => {
  try {
    const books = await Book.find(); // Add logic to fetch personalized recommendations
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
