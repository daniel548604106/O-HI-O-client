import axios from 'axios';
const env = 'development';
const axiosInstance = axios.create({
  baseURL:
    env === 'development' ? 'http://localhost:3000' : 'https://o-hi-o-server.de.r.appspot.com/',
});

export default axiosInstance;
