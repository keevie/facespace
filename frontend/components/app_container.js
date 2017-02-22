import { connect } from 'react-redux';
import App from './app';
import { receiveOpenModal } from '../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    modal: state.modalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(receiveOpenModal(modal)),
    receiveOpenModal: () => dispatch(receiveOpenModal(null))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
