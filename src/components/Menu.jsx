import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const list = [
    { name: 'главная', href: '/' },
    { name: 'каталог', href: '/catalog' },
    { name: 'контакты', href: '/contacts' },
    { name: 'о бренде', href: '/about' },
  ];
  return (
    <nav className="menu__nav">
      <ul className="menu__list">
        {list.map((obj, i) => (
          <NavLink key={i} to={obj.href} className="menu__list-item">
            <li className="menu__list-link">{obj.name}</li>
          </NavLink>
        ))}
      </ul>
      <button className="menu__btn">
        <span className="menu__btn-line"></span>
        <span className="menu__btn-line"></span>
        <span className="menu__btn-line"></span>
        <span className="menu__btn-line"></span>
      </button>
    </nav>
  );
};

export default Menu;
