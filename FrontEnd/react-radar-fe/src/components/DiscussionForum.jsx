// src/components/DiscussionForum.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiscussionForum = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get('/api/discussion');
        setThreads(response.data);
      } catch (error) {
        console.error('Error fetching discussion threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div>
      <h2>Discussion Forum</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionForum;
