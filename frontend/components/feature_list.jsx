import React from 'react';

const FeatureList = () => {
  return (
    <section className="features">
      <h1>Connect with friends and the world around you on facespace.</h1>
      <ul>
        <li>
          <img className='feature-icon'
            src={window.facespaceAssets.features}/>
            <p>See photos and updates</p>
        </li>
        <li>
          <img  className='feature-icon'
            src={window.facespaceAssets.features}/>
            <p>Share what's new</p>
        </li>
        <li>
          <img  className='feature-icon'
            src={window.facespaceAssets.features}/>
            <p>Find more</p>
        </li>
      </ul>
    </section>
  );
};

export default FeatureList;
