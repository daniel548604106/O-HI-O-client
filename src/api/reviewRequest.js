import axiosInstance from '../lib/axios.js';

const getReviews = async (productId) => {
  return await axiosInstance.get(`/v1/reviews/${productId}`);
};

export { getReviews };
