import { connect } from 'react-redux';
import Wall from './wall';
import { fetchUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    session: state.session,
    loading: state.user.loading
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
