import React from 'react';
import logoImg from '../assets/flower.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="menu__list">
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">галерея</li>
            </a>
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">о нас</li>
            </a>
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">каталог</li>
            </a>
          </ul>
          <div className="logo">
            <img className="logo-img" src={logoImg} alt="" />
            <a className="logo__link" href="#">
              rosebotanique
            </a>
            <span className="logo-store">store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
