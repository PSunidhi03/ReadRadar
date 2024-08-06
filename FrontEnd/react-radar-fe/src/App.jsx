// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login';
import Recommendations from './components/Recommendations';
import BookDetails from './components/BookDetails';
import ReadingList from './components/ReadingList'
import DiscussionForum from './components/DiscussionForum';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/reading-list" element={<ReadingList />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />
      </Routes>
    </Router>
 );
};

export default App;


