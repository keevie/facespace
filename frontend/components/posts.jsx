import React from 'react';
import moment from 'moment';
import Post from './post_item';

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
        <div className='overbar'>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <p>Status</p>
        </div>
        <div className='post-form-middle'>
          <img className='avatar'
            src={this.props.currentUser.profile_small}/>
          <textarea
            placeholder="What's on your mind?"
            value={this.state.body}
            onChange={this.handleChange} />
        </div>
        <div className='underbar'>
          <button>Post</button>
        </div>
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
        <Post
          deleteComment={this.props.deleteComment}
          createComment={this.props.createComment}
          updateComment={this.props.updateComment}
          openModal={this.props.openModal}
          modalIsOpen={this.props.modalIsOpen}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          key={post.id}
          currentUser={this.props.currentUser}
          post={post}
          target_name={
            post.wall_f_name + ' ' + post.wall_l_name
          }/>
      );
    });
  }

  render () {
    return (
      <div>
        {this.renderPostForm()}
        {this.renderPosts()}
      </div>
    );
  }
}

export default Posts;

