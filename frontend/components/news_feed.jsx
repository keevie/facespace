import React from 'react';
import Posts from './posts_container';

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchNewsFeedPosts();
    this.pusher = new Pusher('9b5a065bd2b14616be5b', {
      encrypted: true
    });
    this.channel = this.pusher.subscribe(`newsfeed-${this.props.session.currentUser.id}`);

    this.channel.bind('post-change', () => {
      this.props.fetchNewsFeedPosts(this.props.session.currentUser.id);
    });
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
