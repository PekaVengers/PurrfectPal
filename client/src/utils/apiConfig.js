import axios from 'axios';
import {BASE_URL} from './BASE_URL';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;