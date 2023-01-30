import React from 'react';
import logoImg from '../assets/flower.png';
import Menu from './Menu';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Menu />
          <div className="logo">
            <img className="logo-img" src={logoImg} alt="" />
            <h1>rosebotanique</h1>
            <span className="logo-store">store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
