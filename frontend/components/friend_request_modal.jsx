import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

const modalStyle = {
  overlay: {
    width: '430px',
    height: '660px',
    position: 'absolute',
    left: '-380px',
    background: 'transparent',
    zIndex: 100
  },

  content: {
    width: '430px',
    height: '660px',
    backgroundColor: 'white',
    zIndex: 100
  }
};

class FriendRequestModal extends React.Component {
  constructor (props) {
    super(props);
    this.renderFriendRequests = this.renderFriendRequests.bind(this);
    this.handleAcceptFriendRequest = this.handleAcceptFriendRequest.bind(this);
  }

  getParent () {
    return document.querySelector('#friends-nav-button');
  }

  handleAcceptFriendRequest (user_id) {
    return (e) => {
      e.preventDefault();
      this.props.acceptFriendRequest({
        user_id,
        pending: false,
        friend_id: this.props.session.currentUser.id
      });
    };
  }

  handleRejectFriendRequest (user_id) {
    return (e) => {
      e.preventDefault();
      this.props.rejectFriendRequest({
        user_id,
        friend_id: this.props.session.currentUser.id
      });
    };
  }


  renderFriendRequests () {
    let friendReqArray = [];
    Object.keys(this.props.requests).forEach((request) => {
      friendReqArray.push(this.props.requests[request]);
    });

    friendReqArray = friendReqArray.sort((req2, req1) => {
      return Date.parse(req1.created_at) - Date.parse(req2.created_at);
    });


    return friendReqArray.map((request) => {
      return (
        <div className='friend-req' key={request.requester_id}>
          <img className='friend-req-avatar' src={request.requester_avatar} />
          <Link to={request.requester_link}>
            <p>{request.requester_f_name + ' ' + request.requester_l_name}</p>
          </Link>
          <button
            className='friend-req-button'
            onClick={this.handleAcceptFriendRequest(request.requester_id)}>
            accept
          </button>
          <button
            className='friend-req-button'
            onClick={this.handleRejectFriendRequest(request.requester_id)}>
            reject
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <Modal
        style={modalStyle}
        parentSelector={this.getParent}
        isOpen = {this.props.modalIsOpen === 'friend-requests'}
        contentLabel=''>
        <h1 id='friend-request-title'>Friend Requests</h1>
        {this.renderFriendRequests()}
      </Modal>
    );
  }
}

export default FriendRequestModal;
