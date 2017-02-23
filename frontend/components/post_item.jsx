import React from 'react';
import moment from 'moment';
import CommentForm from './comment_form_container';

class PostItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      editComment: false,
      body: this.props.post.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderTargetWall (post) {
    if (post.wall_id !== post.author_id) {
      return (
        <div>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          <p>{this.props.target_name}</p>
        </div>
      );
    }
    else {
      return null;
    }
  }

  renderDropDown () {
    if (this.props.currentUser.id !== this.props.post.author_id) {
      return null;
    }
    else if (!(this.props.modalIsOpen === `postDropDown-${this.props.post.id}`))  {
      return (
        <i className="fa fa-angle-down"
          onClick={() => this.props.openModal(`postDropDown-${this.props.post.id}`)}
          aria-hidden="true"></i>
      );
    }
    else {
      return (
        <div onClick={(e) => e.stopPropagation()}>
          <i className="fa fa-angle-down"
            onClick={(e) => {
              this.props.openModal(`postDropDown-${this.props.post.id}`);
              }
            }
            aria-hidden="true"></i>
          <button
            onClick={() => {
            this.setState({edit: true});
            this.props.openModal(null);
            }}
          >edit</button>
          <button onClick={this.props.deletePost.bind(null, this.props.post)}>
            delete
          </button>
        </div>
      );
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updatePost({
      id: this.props.post.id,
      body: this.state.body,
      wall_id: this.props.post.wall_id,
      user_id: this.props.currentUser.id
    });
    this.setState({edit: false});
    this.props.openModal(null);
  }

  renderEditOrBody () {
    if (this.state.edit) {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea
          onChange={this.handleChange}
          value={this.state.body}/>
          <button>Post</button>
        </form>
      );
    }
    else {
      return <article>{this.props.post.body}</article>;
    }
  }

  renderCommentEditOrBody (comment) {
    if (this.state.editComment) {
      return (
        <CommentForm
          closeEdit={() => this.setState({editComment: false})}
          edit={true}
          id={comment.id}
          body={comment.body}
          parent_id={comment.parent_id}
          commentable_id={comment.commentable_id}
        />
      );
    }
    else {
      return <p>{comment.body}</p>;
    }
  }

  renderComments (topLevelComments) {
    return (
      <section>
        {topLevelComments.map((comment) => {
          return (
            <div id='comment' key={comment.id}>
              <img src={comment.author_avatar}/>
              <p>{comment.author_full_name}</p>
              {this.renderCommentEditOrBody(comment)}
              <p>reply</p>
              <button onClick={this.props.deleteComment.bind(null, comment)}>
                delete
              </button>

              <button onClick={() => {
                this.setState({editComment: true});
              }}>
                edit
              </button>

              {this.renderComments(this.props.post.comments.
                filter((childComment) => comment.children.includes(childComment.id)))}
                <CommentForm
                  closeEdit={() => this.setState({editComment: false})}
                  edit={false}
                  body=''
                  parent_id={comment}
                  commentable_id={this.props.post.id}
                />
            </div>
          );
        })}
      </section>
    );
  }

  getTopLevelComments () {
    return this.props.post.comments.filter((comment) => !(comment.parent_id));
  }

  render () {
    return (
      <div className='post' key={this.props.post.id}>
        <header className='post-header'>
          <img className='avatar' src={this.props.post.avatar}/>
          <div id='post-info'>
            <div id='top-row'>
              <p>{this.props.post.author_f_name + ' '
                  + this.props.post.author_l_name}</p>
            </div>
            {this.renderTargetWall(this.props.post)}

            <p>{moment(this.props.post.created_at).fromNow()}</p>
          </div>
          {this.renderDropDown()}
          {this.renderEditOrBody()}
          {this.renderComments(this.getTopLevelComments())}
          <CommentForm
            closeEdit={() => this.setState({editComment: false})}
            edit={false}
            parent_id='nil'
            body=''
            commentable_id={this.props.post.id}
          />
        </header>
      </div>
    );
  }

}

export default PostItem;

