import React from 'react';
import moment from 'moment';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    this.state = {
      body: '',
      user_id: this.props.currentUser.id,
      wall_id: this.props.wallId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({body: ''});
  }

  renderPostForm () {
    return (
      <form className='post-form' onSubmit={this.handleSubmit}>
        <img className='avatar'
          src={this.props.currentUser.profile_small}/>
        <textarea
          placeholder="What's on your mind?"
          value={this.state.body}
          onChange={this.handleChange} />
        <button>Post</button>
      </form>
    );
  }

  renderPosts () {
    let postsArray = [];
    Object.keys(this.props.posts).forEach((post) => {
      postsArray.push(this.props.posts[post]);
    });
    postsArray = postsArray.sort((post2, post1) => {
      return Date.parse(post1.created_at) - Date.parse(post2.created_at);
    });

    return postsArray.map((post) => {
      return (
        <div key={post.id}>
          <p>{post.body}</p>
          <img className='avatar' src={post.avatar}/>
          <p>By {post.author_f_name + ' ' + post.author_l_name}</p>
          <p>{moment(post.created_at).fromNow()}</p>
        </div>
      );
    });
  }

  render () {
    return (
      <section className='timeline-posts'>
        {this.renderPostForm()}
        {this.renderPosts()}
      </section>
    );
  }
}

export default Posts;

