import { connect } from 'react-redux';
import FriendRequestModal from './friend_request_modal';
import { receiveOpenModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return {
    session: state.session,
    modalIsOpen: state.modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(receiveOpenModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestModal);
