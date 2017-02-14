import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(
  mapStateToProps
)(App);
