import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement('body');
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      friendships: {
        friends: window.currentUser.friends,
        sentFriendRequests: window.currentUser.sent_friend_requests,
        receivedFriendRequests: {}
      }
    };

    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  delete window.currentUser;
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
