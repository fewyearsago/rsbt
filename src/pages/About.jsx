import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const About = () => {
  return (
    <AnimatedPage>
      <div className="about">
        <div className="container">
          <div className="about__box">
            <Menu />
            <div className="about__inner">
              <h1 className="about__title">Hi I'm Hadizhat</h1>
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
    </AnimatedPage>
  );
};

export default About;
