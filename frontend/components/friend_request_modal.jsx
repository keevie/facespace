import React from 'react';
import Modal from 'react-modal';


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
  }

  getParent () {
    return document.querySelector('#friends-nav-button');
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
        <div key={request.requester_id}>
          <img src={request.requester_avatar} />
          <p>{request.requester_f_name + ' ' + request.requester_l_name}</p>
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
        Friend Requests
        {this.renderFriendRequests()}
      </Modal>
    );
  }
}

export default FriendRequestModal;
