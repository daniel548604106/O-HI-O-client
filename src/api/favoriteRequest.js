import axiosInstance from '../lib/axios.js';

export const addToFavorite = async (id, token, type) => {
  return await axiosInstance.patch(
    '/v1/favorite',
    { id, type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getFavList = async (token) => {
  return await axiosInstance.get('/v1/favorite', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
