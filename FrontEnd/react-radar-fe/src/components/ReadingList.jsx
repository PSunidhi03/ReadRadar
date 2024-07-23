// src/components/ReadingList.jsx
import React from 'react';
import { useState } from 'react';

const ReadingList = () => {
  const [list, setList] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' }
  ]);

  return (
    <div>
      <h2>Your Reading List</h2>
      <ul>
        {list.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;
