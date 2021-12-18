import axiosInstance from '../lib/axios.js';

export const getAllProducts = (query) => {
  return axiosInstance.get(`/v1/products?${query}`);
};
export const getDiscountedProducts = () => {
  return axiosInstance.get('/v1/products/discount');
};
export const getProduct = (id) => {
  return axiosInstance.get(`/v1/products/product/${id}`);
};

export const getRecommendedProducts = () => {
  return axiosInstance.get(`/v1/products/recommendation`);
};

export const getCollectionProducts = (collection) => {
  return axiosInstance.get(`v1/products/collection/${collection}`);
};
