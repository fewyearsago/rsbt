import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="menu__list">
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">illustration</li>
            </a>
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">about</li>
            </a>
            <a className="menu__list-item" href="#">
              <li className="menu__list-link">store</li>
            </a>
          </ul>
          <div className="logo">
            <a className="logo__link" href="#">
              rosebotanique
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
