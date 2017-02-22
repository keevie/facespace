import React from 'react';
import Modal from 'react-modal';

class FriendRequestModal extends React.Component {


  getParent () {
    return document.querySelector('#friends-nav-button');
  }

  render() {
    return (
      <Modal
        parentSelector={this.getParent}
        isOpen = {this.props.modalIsOpen === 'friend-requests'}
        contentLabel=''>
      </Modal>
    );
  }
}

export default FriendRequestModal;
