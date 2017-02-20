import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const UPDATE_USER = 'UPDATE_USER';
export const LOADING_USER_INFO = 'LOADING_USER_INFO';
export const LOADED_USER_INFO = 'LOADED_USER_INFO';

export const fetchUser = (profileUrl) => {
  return (dispatch) => {
    return APIUtil.fetchUser(profileUrl)
      .then(user => dispatch(receiveUserInfo(user)));
  };
};

export const receiveUserInfo = (user) => {
  return {
    type: RECEIVE_USER_INFO,
    user
  };
};

export const loadedUserInfo = () => {
  return {
    type: LOADED_USER_INFO
  };
};

export const loadingUserInfo = () => {
  return {
    type: LOADING_USER_INFO
  };
};

export const updateUser = (file, profileUrl) => {
  return (dispatch) => {
    dispatch(loadingUserInfo());
    return APIUtil.updateUser(file, profileUrl)
      .then(user => dispatch(receiveUserInfo(user)))
        .then(() => dispatch(loadedUserInfo()));
  };
};
