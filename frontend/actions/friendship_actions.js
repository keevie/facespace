import * as APIUtil from '../util/friendship_api_util';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';

export const sendFriendRequest = (friendship) => {
  return (dispatch) => {
    return APIUtil.sendFriendRequest(friendship)
      .then(newFriendship => dispatch(receiveFriendship(newFriendship)));
  };
};

export const receiveFriendship = (friendship) => {
  return {
    type: SEND_FRIEND_REQUEST,
    friendship
  };
};