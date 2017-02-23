import React from 'react';
import Posts from './posts_container';

class NewsFeed extends React.Component {
  componentWillMount() {
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
