import axios from 'axios';
import { config } from './config';

const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('Response error:', error.response.data);
      throw new Error(`Server Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received from server');
    } else {
      console.error('Request error:', error.message);
      throw new Error(`Request Error: ${error.message}`);
    }
  }
);

export { apiClient };
