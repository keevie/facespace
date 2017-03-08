import React from 'react';
import moment from 'moment';

const About = ({dob, location}) => {
  return (
    <section className="about">
      <div id='about-title'>
        <i className="fa fa-globe" aria-hidden="true"></i>
        <h2>Intro</h2>
      </div>
      <ul>
        <li><p>
          <i className="fa fa-birthday-cake" aria-hidden="true"></i>
          Birthday: {moment(dob).format('MMMM D, YYYY')}
        </p></li>
        <li><p>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          Location: {location}
        </p></li>
      </ul>
    </section>
  );
};

export default About;
