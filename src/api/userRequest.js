import axiosInstance from '../lib/axios.js';

export const getUserData = async (id) => {
  return await axiosInstance.get(`/v1/users/user/${id}`);
};
