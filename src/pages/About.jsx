import React from 'react';
import Menu from '../components/Menu';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__box">
          <Menu />
          <div className="about__inner">
            <p className="about__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempora mollitia
              reiciendis error porro saepe eaque magnam quisquam voluptas numquam, sint asperiores
              molestias, officiis exercitationem cu cumque quo accusamus itaque?
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempora mollitia
              reiciendis error porro saepe eaque magnam quisquam voluptas numquam, sint asperiores
              molestias, officiis exercitationem cu cumque quo accusamus itaque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
