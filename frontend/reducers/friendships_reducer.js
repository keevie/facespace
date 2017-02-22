import {
  SEND_FRIEND_REQUEST,
  CANCEL_FRIEND_REQUEST,
  UNFRIEND,
  ACCEPT_FRIEND_REQUEST,
  REJECT_FRIEND_REQUEST
}
  from '../actions/friendship_actions';
import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const defaultState = {
  friends: {},
  sentFriendRequests: {},
  receivedFriendRequests: {}
};

const friendshipsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SEND_FRIEND_REQUEST:
      return Object.assign(
        {}, state,
        {sentFriendRequests: {[action.friendship.friend_id]: action.friendship}}
      );
    case CANCEL_FRIEND_REQUEST:
      let newState = Object.assign({}, state);
      delete newState.sentFriendRequests[action.friendship.friend_id];
      return newState;
    case UNFRIEND:
      newState = Object.assign({}, state);
      delete newState.friends[action.friendship.friend_id];
      return newState;
    case ACCEPT_FRIEND_REQUEST:
      newState = Object.assign({}, state);
      delete newState.receivedFriendRequests[action.friendship.friend_id];
      return Object.assign(
        {}, newState,
        {friends: {[action.friendship.friend_id]: action.friendship}}
      );
    case REJECT_FRIEND_REQUEST:
      newState = Object.assign({}, state);
      delete newState.receivedFriendRequests[action.friendship.friend_id];
      return newState;
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, state,
        {
          sentFriendRequests: action.user.sent_friend_requests,
          friends: action.user.friends
        }
      );
    default:
      return state;
  }
};

export default friendshipsReducer;
