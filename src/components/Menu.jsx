import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const list = [
    { name: 'галерея', href: '/' },
    { name: 'о нас', href: '/about' },
    { name: 'каталог', href: '/catalog' },
    { name: 'контакты', href: '/contacts' },
  ];
  return (
    <ul className="menu__list">
      {list.map((obj, i) => (
        <NavLink key={i} to={obj.href} className="menu__list-item">
          <li className="menu__list-link">{obj.name}</li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;
