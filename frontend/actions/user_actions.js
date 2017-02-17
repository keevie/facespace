import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const UPDATE_USER = 'UPDATE_USER';

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

export const updateUser = (file, profileUrl) => {
  return (dispatch) => {
    return APIUtil.updateUser(file, profileUrl)
      .then(user => dispatch(receiveUserInfo(user)));
  };
};
