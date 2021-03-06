import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';
import { receiveOpenModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(receiveOpenModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
