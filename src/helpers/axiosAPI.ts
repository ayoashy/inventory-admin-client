import axios from 'axios';

const token = localStorage.getItem('token');

const unauthenticatedApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authenticatedApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export { unauthenticatedApi, authenticatedApi };
