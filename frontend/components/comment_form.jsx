import React from 'react';

class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: this.props.body,
      parent_id: this.props.parent_id,
      author_id: this.props.currentUser.id,
      commentable_id: this.props.commentable_id,
      commentable_type: 'Post'
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
    if (this.props.edit) {
      let newState = Object.assign({}, this.state, {id: this.props.id});
      this.props.updateComment(newState);
    }
    else {
      this.props.createComment(this.state);
    }
    this.setState({body: ''});
    this.props.closeEdit();
    this.props.openModal(null);
  }

  render () {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <img className='avatar'
          src={this.props.currentUser.profile_small}/>
        <input
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.handleChange} />
      </form>
    );
  }


}

export default CommentForm;
