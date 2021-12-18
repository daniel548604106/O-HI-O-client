import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://o-hi-o-server.de.r.appspot.com/',
});

export default axiosInstance;
