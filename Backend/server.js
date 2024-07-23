// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');
const discussionRoutes = require('./routes/discussion');
const authMiddleware = require('./Middleware/authMiddleware');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/discussion', discussionRoutes);

// Middleware to protect routes
app.use('/api/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

// Connect to MongoDB and start server
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error('Database connection error:', err));
