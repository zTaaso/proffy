import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.169.0.106:3333',
  timeout: 3000,
});

export default api;
