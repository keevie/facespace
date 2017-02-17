import { connect } from 'react-redux';
import Wall from './wall';
import { fetchUser, updateUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (profileUrl) => dispatch(fetchUser(profileUrl)),
    updateUser: (file, profileUrl) => dispatch(updateUser(file, profileUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
