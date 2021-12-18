import axiosInstance from '../lib/axios.js';

export const getBanners = async () => {
  return await axiosInstance.get(`/v1/banners`);
};
