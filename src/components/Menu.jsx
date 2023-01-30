import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Menu = () => {
  return (
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
  );
};

export default Menu;
