import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env === 'production'
      ? 'https://o-hi-o-server.de.r.appspot.com/'
      : 'http://localhost:3000',
});

export default axiosInstance;
