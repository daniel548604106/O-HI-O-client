import Cookie from 'js-cookie';

import axiosInstance from '../lib/axios.js';

const token = Cookie.get('token');

export const patchMyData = (data) => {
  return axiosInstance.patch('/v1/my', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const patchMyPhoto = (data) => {
  return axiosInstance.patch('/v1/my/photo', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
