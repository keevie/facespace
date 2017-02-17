import React from 'react';
import { Link } from 'react-router';

const WallNavBar = (props) => {
  return (
    <nav className='wallnav'>
      <ul>
        <li>Timeline</li>
        <li>About</li>
        <li>Friends</li>
        <li>Photos</li>
      </ul>
    </nav>
  );
};

export default WallNavBar;
