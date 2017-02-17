import { connect } from 'react-redux';
import Wall from './wall';
import { fetchUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (profileUrl) => dispatch(fetchUser(profileUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
