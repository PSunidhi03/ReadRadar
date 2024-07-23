// backend/controllers/discussionController.js
const Discussion = require('../Models/Discussion');

exports.getThreads = async (req, res) => {
  try {
    const threads = await Discussion.find();
    res.status(200).json(threads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching discussion threads' });
  }
};
