import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

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
