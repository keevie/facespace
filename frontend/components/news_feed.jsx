import React from 'react';
import Posts from './posts_container';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchNewsFeedPosts();
  }


  render () {
    return (
      <section className='news-feed'>
        <Posts
          wallId={this.props.session.currentUser.id}
          posts={this.props.posts}/>
      </section>
    );
  }
}

export default NewsFeed;
