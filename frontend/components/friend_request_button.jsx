import React from 'react';
import modal from 'react-modal';

class FriendRequestButton extends React.Component {
  constructor (props) {
    super(props);
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
  }

  sendFriendRequest (e) {
    e.preventDefault();
    this.props.sendFriendRequest({
      user_id: this.props.userId,
      friend_id: this.props.friendId
    });
  }

  render() {
    if (this.props.ownWall) {
      return null;
    }
    //if friends already
    // else if () {
    //   return (
    //     <div id='add-friend'>
    //       <i className="fa fa-check" aria-hidden="true" />
    //     </div>
    //   );
    // }
    else if (this.props.friendState === 'pending') {
      return (
        <div className='add-friend' id='pending-friend-request'>
        <i className="fa fa-user-plus" aria-hidden="true" />
        Friend Request Sent
        <i className="fa fa-caret-down" aria-hidden="true" />
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

