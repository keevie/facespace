import React from 'react';
import SplashContainer from './splash_container';
import NavBarContainer from './nav_bar_container';

const App = ({children, currentUser, receiveOpenModal, modal, openModal}) => {
  const removeModal = () => {
      if  ( modal ) {
        openModal(null);
      }
    };
  if (currentUser) {
    return (
      <div
        onClick={removeModal} >
        <NavBarContainer />
        {children}
      </div>
    );
  }
  else {
    return (
      <div>
        <SplashContainer />
      </div>
    );
  }
};

export default App;
