import axiosInstance from '../lib/axios.js';

export const getHotShop = async () => {
  return await axiosInstance.get('/v1/shops/hot');
};

export const getShopProducts = async (account) => {
  return await axiosInstance.get(`/v1/shops/${account}/products`);
};

export const getShopInfo = (account) => {
  return axiosInstance.get(`/v1/shops/${account}`);
};
