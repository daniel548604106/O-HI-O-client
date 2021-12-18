import axiosInstance from '../lib/axios.js';

//註冊

export const postSignup = async (data) => {
  return await axiosInstance.post('/v1/auth/signup', data);
};

//登入

export const postLogin = (data) => {
  return axiosInstance.post('/v1/auth/login', data);
};

// 社群登入

export const postOAuthLogin = (data) => {
  return axiosInstance.post('/v1/oauth/login', data);
};

// 登出
export const postLogout = (token) =>
  axiosInstance.post(
    '/v1/auth/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
