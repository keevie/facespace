import React from 'react';

const About = ({dob, location}) => {
  return (
    <section className="about">
      <ul>
        <li><p>Birthday: {dob}</p></li>
        <li><p>location: {location}</p></li>
      </ul>
    </section>
  );
}

export default About;
