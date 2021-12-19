import { postLogin, postLogout, postOAuthLogin, postSignup } from './authRequest';
import { getBanners } from './bannerRequest';
import { getAllChats, getChat, patchChat } from './chatRequest';
// Favorite
import { addToFavorite, getFavList } from './favoriteRequest';
import { patchMyData, patchMyPhoto } from './myRequest';
import { getAllOrders, postNewOrder } from './orderRequest';
// 產品
import {
  getAllProducts,
  getCollectionProducts,
  getDiscountedProducts,
  getProduct,
  getRecommendedProducts,
} from './productRequest';
import { getReviews } from './reviewRequest';
import { getSearchedProducts } from './searchRequest';
import { getHotShop, getShopInfo, getShopProducts } from './shopRequest';
import { getUserData } from './userRequest';
export const apiGetUserData = getUserData;

// 使用者登入/註冊

export const apiPostLogin = postLogin;
export const apiPostSignup = postSignup;
export const apiPostOauthLogin = postOAuthLogin;
export const apiPostLogout = postLogout;

export const apiGetAllProducts = getAllProducts;
export const apiGetRecommendedProducts = getRecommendedProducts;
export const apiGetProduct = getProduct;
export const apiGetCollectionProducts = getCollectionProducts;
export const apiGetDiscountedProducts = getDiscountedProducts;
// Banner

export const apiGetBanners = getBanners;

// Review

export const apiGetReviews = getReviews;

// export const apiAddFavProduct = addFavProduct;
export const apiAddToFavorite = addToFavorite;
export const apiGetFavList = getFavList;

// Shop

export const apiGetShopProducts = getShopProducts;
export const apiGetHotShop = getHotShop;
export const apiGetShopInfo = getShopInfo;

// My

export const apiPatchMyData = patchMyData;
export const apiPatchMyPhoto = patchMyPhoto;

// Order

export const apiPostNewOrder = postNewOrder;
export const apiGetAllOrders = getAllOrders;
// Chat

export const apiPatchChat = patchChat;
export const apiGetChat = getChat;
export const apiGetAllChats = getAllChats;

// Search

export const apiGetSearchedProducts = getSearchedProducts;
