import axiosInstance from '../lib/axios.js';

export const getSearchedProducts = (text) => {
  return axiosInstance.get(`/v1/search?text=${text}`);
};
