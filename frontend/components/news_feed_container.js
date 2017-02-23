import { connect } from 'react-redux';
import NewsFeed from './news_feed';
import { fetchNewsFeedPosts } from '../actions/post_actions';

const mapStateToProps = state => {
  return {
    session: state.session,
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsFeedPosts: () => dispatch(fetchNewsFeedPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
