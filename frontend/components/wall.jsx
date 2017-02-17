import React from 'react';

const Wall = (props) => {
  return (
    <section className='wall'>
      <div className='cover'>
        <img id='cover-photo' src={window.facespaceAssets.defaultCover}/>
        <div id='prof-photo-container'>
          <img id='profile-photo' src={window.facespaceAssets.defaultProfile}/>
        </div>
      </div>
    </section>
  );
};

export default Wall;
