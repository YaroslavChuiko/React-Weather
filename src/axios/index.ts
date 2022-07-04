import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
  config.url += '&appid=' + process.env.REACT_APP_API_KEY + '&units=metric' + '&lang=ua';
  return config;
});

export default api;
