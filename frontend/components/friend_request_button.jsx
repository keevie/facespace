import React from 'react';
import modal from 'react-modal';

class FriendRequestButton extends React.Component {
  constructor (props) {
    super(props);
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
    this.renderCancelDropdown = this.renderCancelDropdown.bind(this);
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
          <button>Cancel Friend Request</button>
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
        <div className='add-friend'
          onClick={(e) => {
            this.props.openModal('cancel-friend-request');
            const modalOffSwitch = document.querySelector('#modalToggleOff');
            const removeModal = () => {
              this.props.openModal(null);
              modalOffSwitch.removeEventListenter('click', removeModal);
            };
            modalOffSwitch.addEventListener('click', removeModal);
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

