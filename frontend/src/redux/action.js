import {
  LOGIN,
  REQUEST_FETCH_LOGIN,
  ERROR,
  CLEAR_ERROR,
  REQUEST_FETCH_REGIST,
  PROFILE_INIT
} from "./action-types";

export const LogIn = (id, nickname, profileId, success) => ({
  type: LOGIN,
  id,
  nickname,
  profileId,
  success
});

export const requestFetchRegist = (nickname, email, password) => ({
  type: REQUEST_FETCH_REGIST,
  nickname,
  email,
  password
});

export const profileInit = profileId => ({
  type: PROFILE_INIT,
  profileId
});

export const error = title => ({
  type: ERROR,
  title
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const requestFetchLogin = (email, password) => ({
  type: REQUEST_FETCH_LOGIN,
  email,
  password
});
export default {
  LogIn,
  requestFetchLogin,
  clearError,
  error,
  requestFetchRegist
};
