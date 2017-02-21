import { connect } from 'react-redux';
import App from './app';
import { receiveOpenModal } from '../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveOpenModal: () => dispatch(receiveOpenModal(null))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
