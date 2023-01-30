import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__box">
          <ul className="menu__list">
            <Link to={'/'} className="menu__list-item" href="#">
              <li className="menu__list-link">галерея</li>
            </Link>
            <Link to={'/about'} className="menu__list-item" href="#">
              <li className="menu__list-link">о нас</li>
            </Link>
            <Link to={'/catalog'} className="menu__list-item" href="#">
              <li className="menu__list-link">каталог</li>
            </Link>
          </ul>
          <p className="about__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsam
            iste officia expedita ut ea quos iure, libero dignissimos
            perferendis. Odio modi laudantium exercitationem harum earum
            molestias ut consectetur dicta. In eos amet illum? Vel aut ratione
            atque id non maiores dolores amet dolor asperiores reiciendis
            deleniti, quam voluptatibus sint praesentium temporibus fugiat
            cupiditate nulla aliquam ipsam odio ad. Veritatis. Impedit dolore
            quia modi! Facilis quidem suscipit quisquam odio ipsam ipsum tempore
            iure excepturi, soluta eos quas et, officia omnis laborum quis?
            Quaerat modi rerum nam vitae suscipit consectetur accusantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
