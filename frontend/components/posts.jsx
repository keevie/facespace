import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts () {
    const postsArray = this.props.posts;
    return postsArray.map((post) => {
      return (
        <div key={post.id}>
          <p>{post.body}</p>
          <p>By {post.author_f_name + ' ' + post.author_l_name}</p>
          <p>At {post.created_at}</p>
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

