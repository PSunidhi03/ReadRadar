// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api'; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
