import React from 'react';
import moment from 'moment';
import CommentForm from './comment_form_container';
import { Link } from 'react-router';

class PostItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: this.props.post.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderTargetWall (post) {
    if (post.wall_id !== post.author_id) {
      return (
        <div id='target-wall'>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          <Link to={this.props.target_link}>
            <p>{this.props.target_name}</p>
          </Link>
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
            this.props.openModal(`editPost-${this.props.post.id}`);
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
    this.props.openModal(null);
  }

  renderEditOrBody () {
    if (this.props.modalIsOpen === `editPost-${this.props.post.id}`) {
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
      return (
        <article className='post-body'>
          {this.props.post.body}
        </article>
      );
    }
  }

  renderCommentEditOrBody (comment) {
    if (this.props.modalIsOpen === `editComment-${comment.id}`) {
      return (
        <CommentForm
          edit={true}
          id={comment.id}
          openModal={this.props.openModal}
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

  renderCommentEditAndDeleteButtons(comment) {
    const renderButtons = () => {
      return (
        <div>
          <button onClick={this.props.deleteComment.bind(null, comment)}>
            delete
          </button>

          <button onClick={(e) => {
            e.stopPropagation();
            this.props.openModal(`editComment-${comment.id}`);
          }}>
            edit
          </button>
        </div>
      );
    };
    if (comment.author_id !== this.props.currentUser.id) {
      return null;
    }
    else {
      return (
        <div>
          <i
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.props.openModal(`commentEditDelete-${comment.id}`);}
            }
            className="fa fa-pencil" aria-hidden="true">
          </i>

          {
            this.props.modalIsOpen === `commentEditDelete-${comment.id}` &&
              renderButtons()
          }
        </div>
      );
    }
  }

  renderComments (topLevelComments) {
    return (
      <section>
        {topLevelComments.map((comment) => {
          return (
            <div className='comment' key={comment.id}>
              <header className='comment-heading'>
              <img src={comment.author_avatar}/>
              <div className='comment-not-avatar'>
                <div className='comment-topline'>
                  <div className='comment-topline-left'>
                    <Link to={comment.author_link}>
                      <p className='comment-author'>{comment.author_full_name}</p>
                    </Link>
                    {this.renderCommentEditOrBody(comment)}
                  </div>
                  <div className='comment-topline-right'>
                    {this.renderCommentEditAndDeleteButtons(comment)}
                  </div>
                </div>
                <div className='comment-bottomline'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      this.props.openModal(`commentReply-${comment.id}`);}
                    }
                  >
                    reply
                  </button>
                </div>
              </div>
            </header>
              <div className='child-comments'>
                {this.renderComments(this.props.post.comments.
                  filter((childComment) => comment.children.includes(childComment.id)))}

                {this.props.modalIsOpen === `commentReply-${comment.id}` &&
                    <CommentForm
                      edit={false}
                      body=''
                      parent_id={comment.id}
                      openModal={this.props.openModal}
                      commentable_id={this.props.post.id}
                    />
                }
              </div>
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
          <div id='avatar-and-post-info'>
          <img className='avatar' src={this.props.post.avatar}/>
            <div id='post-info'>
              <div id='top-row'>
                <Link to={this.props.post.author_link}>
                <p>{this.props.post.author_f_name + ' '
                    + this.props.post.author_l_name}</p>
                </Link>
              {this.renderTargetWall(this.props.post)}
              </div>

              <p id='post-time-ago'>{moment(this.props.post.created_at).fromNow()}</p>
            </div>
          </div>
          {this.renderDropDown()}
        </header>
          {this.renderEditOrBody()}
        <section className='comments'>
          {this.renderComments(this.getTopLevelComments())}
          <CommentForm
            edit={false}
            openModal={this.props.openModal}
            parent_id='nil'
            body=''
            commentable_id={this.props.post.id}
          />
        </section>
      </div>
    );
  }

}

export default PostItem;

