import { connect } from 'react-redux';
import FriendRequestModal from './friend_request_modal';
import { receiveOpenModal } from '../actions/modal_actions';
import { acceptFriendRequest, rejectFriendRequest }
  from '../actions/friendship_actions';

const mapStateToProps = state => {
  return {
    session: state.session,
    modalIsOpen: state.modalOpen,
    requests: state.friendships.receivedFriendRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(receiveOpenModal(modal)),
    acceptFriendRequest: (friendship) => dispatch(acceptFriendRequest(friendship)),
    rejectFriendRequest: (friendship) => dispatch(rejectFriendRequest(friendship))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestModal);
