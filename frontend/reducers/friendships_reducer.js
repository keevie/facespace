import { SEND_FRIEND_REQUEST } from '../actions/friendship_actions';
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
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, state,
        {sentFriendRequests: action.user.sent_friend_requests}
      );
    default:
      return state;
  }
};

export default friendshipsReducer;
