import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? '';
const token = process.env.REACT_APP_API_KEY ?? '';

const API = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
});

export default API;
