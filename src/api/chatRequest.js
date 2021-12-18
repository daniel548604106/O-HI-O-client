import Cookie from 'js-cookie';

import axiosInstance from '../lib/axios.js';

const token = Cookie.get('token');
export const patchChat = async (id) => {
  return await axiosInstance.patch(
    '/v1/chat',
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getAllChats = async () => {
  return axiosInstance.get('/v1/chat', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getChat = async (chatId) => {
  return axiosInstance.get(`/v1/chat/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
