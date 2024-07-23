// backend/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  genre: { type: String },
  rating: { type: Number, min: 1, max: 5 },
});

module.exports = mongoose.model('Book', bookSchema);
