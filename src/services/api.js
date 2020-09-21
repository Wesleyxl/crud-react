import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost/webservices/api' });

export default api;
