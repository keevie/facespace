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
    else if (!(this.props.modalIsOpen === `postDropDown-${this.props.post.id}`))  {
      return (
        <i className="fa fa-angle-down"
          onClick={() => this.props.openModal(`postDropDown-${this.props.post.id}`)}
          aria-hidden="true"></i>
      );
    }
    else {
      return (
        <div>
          <i className="fa fa-angle-down"
            onClick={(e) => {
              this.props.openModal(`postDropDown-${this.props.post.id}`);
              const modalOffSwitch = document.querySelector('#modalToggleOff');
              const removeModal = () => {
                this.props.openModal(null);
                modalOffSwitch.removeEventListenter('click', removeModal);
              };
              modalOffSwitch.addEventListener('click', removeModal);
              }
            }
            aria-hidden="true"></i>
          <button>edit</button>
          <button onClick={this.props.deletePost.bind(null, this.props.post)}>
            delete
          </button>
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
          {this.renderDropDown()}
        </header>
        <article>{this.props.post.body}</article>
      </div>
    );
  }

}

export default PostItem;

