import React from 'react';
import moment from 'moment';

class PostItem extends React.Component {
  constructor (props) {
    super(props);
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
  }

  renderDropDown () {
    if (this.props.currentUser.id !== this.props.post.author_id) {
      return null;
    }
    else if (!(this.state.dropDownOpen))  {
      return null;
    }
    else {
      return (
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      );
    }
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
          <i className="fa fa-angle-down"
            onClick={this.toggleDropDown()}
            aria-hidden="true"></i>
          {this.renderDropDown()}
        </header>
        <article>{this.props.post.body}</article>
      </div>
    )

  }

}

export default PostItem;

