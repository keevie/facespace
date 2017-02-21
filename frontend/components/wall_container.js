import { connect } from 'react-redux';
import Wall from './wall';
import { fetchUser } from '../actions/user_actions';
import { fetchTimelinePosts } from '../actions/post_actions';
import { sendFriendRequest } from '../actions/friendship_actions';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    session: state.session,
    loading: state.user.loading,
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (profileUrl) => dispatch(fetchUser(profileUrl)),
    fetchTimelinePosts: wallId => dispatch(fetchTimelinePosts(wallId)),
    sendFriendRequest: friendship => dispatch(sendFriendRequest(friendship))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
