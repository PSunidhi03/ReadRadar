import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/books/recommendations');
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch recommendations', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Book Recommendations</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
