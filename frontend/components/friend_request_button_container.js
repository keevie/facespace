import { connect } from 'react-redux';
import { sendFriendRequest } from '../actions/friendship_actions';

import FriendRequestButton  from './friend_request_button';

const mapStateToProps = state => {
  let friendState = false;
  if (state.friendships.sentFriendRequests[state.user.user.id]) {
    friendState = 'pending';
  }
  // if already friends set to true
  return {
    friendState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendFriendRequest: friendship => dispatch(sendFriendRequest(friendship))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestButton);
