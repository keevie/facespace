import { SEND_FRIEND_REQUEST } from '../actions/friendship_actions';

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
        {receivedFriendRequests: {[action.friendship.id]: action.friendship}}
      );
    default:
      return state;
  }
};
