import React from 'react';
import SplashContainer from './splash_container';
import NavBarContainer from './nav_bar_container';

const App = ({children, currentUser}) => {
  if (currentUser) {
    return (
      <div>
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
