import React from 'react';
import SplashContainer from './splash_container';

const App = ({children, currentUser}) => {
  if (currentUser) {
    return (
      <div>
        <h1>welcome to zombocom</h1>
        {children}
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>not logged in</h1>
        <SplashContainer />
      </div>
    )
  }
};

export default App;
