import * as APIUtil from '../util/friendship_api_util';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
export const CANCEL_FRIEND_REQUEST = 'CANCEL_FRIEND_REQUEST';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const REJECT_FRIEND_REQUEST = 'REJECT_FRIEND_REQUEST';
export const UNFRIEND = 'UNFRIEND';

export const sendFriendRequest = (friendship) => {
  return (dispatch) => {
    return APIUtil.sendFriendRequest(friendship)
      .then(newFriendship => dispatch(receiveFriendship(newFriendship)));
  };
};

export const cancelFriendRequest = (friendship) => {
  return (dispatch) => {
    return APIUtil.cancelFriendRequest(friendship)
      .then(cancelledFriendship => {
        dispatch(deleteFriendRequest(cancelledFriendship));
      });
  };
};

export const acceptFriendRequest = (friendship) => {
  return (dispatch) => {
    return APIUtil.acceptFriend(friendship)
      .then((acceptedFriendship) => {
        dispatch(receiveFriend(acceptedFriendship));
      });
  };
};

export const rejectFriendRequest = (friendship) => {
  return (dispatch) => {
    return APIUtil.rejectFriend(friendship)
      .then((rejectedFriendship) => {
        dispatch(deleteFriendship(rejectedFriendship));
      });
  };
};


export const receiveFriend = (friendship) => {
  return {
    type: ACCEPT_FRIEND_REQUEST,
    friendship
  };
};

export const receiveFriendship = (friendship) => {
  return {
    type: SEND_FRIEND_REQUEST,
    friendship
  };
};

export const unFriend = (friendship) => {
  return (dispatch) => {
    return APIUtil.unFriend(friendship)
      .then(deletedFriendship => {
        dispatch(deleteFriendship(deletedFriendship));
      });
  };
};

export const deleteFriendship = (friendship) => {
  return {
    type: UNFRIEND,
    friendship
  };
};

export const deleteFriendRequest = (friendship) => {
  return {
    type: CANCEL_FRIEND_REQUEST,
    friendship
  };
};
