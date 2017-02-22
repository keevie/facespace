import React from 'react';
import Modal from 'react-modal';

class FriendRequestModal extends React.Component {
  componentWillMount () {
    Modal.setAppElement('body')
  }
  render() {
    return (
      <Modal
        isOpen = {this.props.modalIsOpen === 'friend-requests'}
        contentLabel=''>
      </Modal>
    );
  }
}

export default FriendRequestModal;
