import React from 'react';
import Posts from './posts_container';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchNewsFeedPosts();
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchNewsFeedPosts();
  }

  render () {
    return (
      <Posts
        wallId={this.props.session.currentUser.id}
        posts={this.props.posts}/>
    );
  }
}

export default NewsFeed;
