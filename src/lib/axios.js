import axios from 'axios';
const axiosInstance = axios.create({
  baseURL:
    process.env === 'development'
      ? 'http://localhost:3000'
      : 'https://o-hi-o-server.de.r.appspot.com/',
});

export default axiosInstance;
