import { connect } from 'react-redux';
import { sendFriendRequest, cancelFriendRequest, unFriend, acceptFriendRequest }
  from '../actions/friendship_actions';
import { receiveOpenModal } from '../actions/modal_actions';

import FriendRequestButton  from './friend_request_button';

const mapStateToProps = state => {
  let friendState = false;
  if (state.friendships.sentFriendRequests[state.user.user.id]) {
    friendState = 'pending';
  }
  else if (state.friendships.receivedFriendRequests[state.user.user.id]) {
    friendState = 'requested';
  }
  else if (state.friendships.friends[state.user.user.id]) {
    friendState = true;
  }
  return {
    modalIsOpen: state.modalOpen,
    friendState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(receiveOpenModal(modal)),
    sendFriendRequest: friendship => dispatch(sendFriendRequest(friendship)),
    cancelFriendRequest: friendship => dispatch(cancelFriendRequest(friendship)),
    acceptFriendRequest: friendship => dispatch(acceptFriendRequest(friendship)),
    unFriend: friendship => dispatch(unFriend(friendship))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestButton);
