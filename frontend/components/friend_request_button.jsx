import React from 'react';

class FriendRequestButton extends React.Component {
  constructor (props) {
    super(props);
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
    this.renderCancelDropdown = this.renderCancelDropdown.bind(this);
    this.renderUnfriendDropdown = this.renderUnfriendDropdown.bind(this);
    this.renderAcceptDropdown = this.renderAcceptDropdown.bind(this);
  }

  sendFriendRequest (e) {
    e.preventDefault();
    this.props.sendFriendRequest({
      user_id: this.props.userId,
      friend_id: this.props.friendId
    });
  }

  renderCancelDropdown() {
    if (this.props.modalIsOpen === 'cancel-friend-request') {
      return (
        <div id='friend-request-button-dropdown'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.cancelFriendRequest({
                user_id: this.props.userId,
                friend_id: this.props.friendId
              });
            }}>
            Cancel Friend Request
          </button>
        </div>
      );
    }
    else {
      return null;
    }
  }

  renderAcceptDropdown() {
    if (this.props.modalIsOpen === 'accept-friend-request') {
      return (
        <div id='friend-request-button-dropdown'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.acceptFriendRequest({
                user_id: this.props.friendId,
                friend_id: this.props.userId
              });
            }}>
            Accept Friend Request
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.rejectFriendRequest({
                user_id: this.props.friendId,
                friend_id: this.props.userId
              });
            }}>
            Reject Friend Request
          </button>
        </div>
      );
    }
    else {
      return null;
    }
  }

  renderUnfriendDropdown() {
    if (this.props.modalIsOpen === 'unfriend-dropdown') {
      return (
        <div id='friend-request-button-dropdown'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.unFriend({
                user_id: this.props.userId,
                friend_id: this.props.friendId
              });
              this.props.openModal(null);
            }}>
            Unfriend
          </button>
        </div>
      );
    }
    else {
      return null;
    }
  }

  render() {
    if (this.props.ownWall) {
      return null;
    }
    else if (this.props.friendState === true) {
      return (
        <div className='add-friend'
          onClick={() => {
              this.props.openModal('unfriend-dropdown');
            }
          }>
          <i className="fa fa-check" aria-hidden="true" />
          Friends
          <i className="fa fa-caret-down" aria-hidden="true" />
          {this.renderUnfriendDropdown()}
        </div>
      );
    }
    else if (this.props.friendState === 'pending') {
      return (
        <div className='add-friend'
          onClick={() => {
              this.props.openModal('cancel-friend-request');
            }
          }
          id='pending-friend-request'>
        <i className="fa fa-user-plus" aria-hidden="true" />
        Friend Request Sent
        <i className="fa fa-caret-down" aria-hidden="true" />
        {this.renderCancelDropdown()}
      </div>
      );
    }
    else if (this.props.friendState === 'requested') {
      return (
        <div className='add-friend'
          onClick={() => {
              this.props.openModal('accept-friend-request');
            }
          }
          id='pending-friend-request'>
        <i className="fa fa-user-plus" aria-hidden="true" />
        Requested
        <i className="fa fa-caret-down" aria-hidden="true" />
        {this.renderAcceptDropdown()}
      </div>
      );

    }
    return (
      <div
    onClick={this.sendFriendRequest}
    className='add-friend'>
    <i className="fa fa-user-plus" aria-hidden="true"></i>
    Add Friend
  </div>
  );
  }

}

export default FriendRequestButton;
