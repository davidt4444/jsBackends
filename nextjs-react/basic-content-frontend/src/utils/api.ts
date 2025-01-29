import axios from 'axios';

//for vitae use import.meta.env for create react app use process.env
const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3000', // Assuming your backend runs on port 3000
});

export default api;