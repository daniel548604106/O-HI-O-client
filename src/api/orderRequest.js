import Cookie from 'js-cookie';

import axiosInstance from '../lib/axios.js';
const token = Cookie.get('token');
export const postNewOrder = (data) => {
  return axiosInstance.post('/v1/orders', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getAllOrders = (data) => {
  return axiosInstance.get('/v1/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
