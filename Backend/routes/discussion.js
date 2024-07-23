// backend/routes/discussion.js
const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

router.get('/', discussionController.getThreads);

module.exports = router;
