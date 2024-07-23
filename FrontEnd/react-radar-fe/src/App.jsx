// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecommendationsPage from './pages/RecommendationsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import ReadingListPage from './pages/ReadingListPage';
import DiscussionForumPage from './pages/DiscussionForumPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/reading-list" element={<ReadingListPage />} />
        <Route path="/discussion-forum" element={<DiscussionForumPage />} />
      </Routes>
    </Router>
  );
};

export default App;


