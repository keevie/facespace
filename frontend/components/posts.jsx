import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <div>
          <p>{post.body}</p>
          <p>{post.author}</p>
        </div>
      );
    });
  }

  render () {
    return (
      <section className='timeline-posts'>
        {this.renderPosts()}
      </section>
    );
  }
}

export default Posts;

