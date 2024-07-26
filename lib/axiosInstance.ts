// lib/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Your base URL
  timeout: 10000, // Timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers if needed
  },
});

export default axiosInstance;
