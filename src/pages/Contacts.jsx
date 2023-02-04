import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Contacts = () => {
  return (
    <AnimatedPage>
      <Menu />
      <div className="contacts">
        <div className="contacts__inner">
          <h1 className="contacts__title">Контакты:</h1>
          <a className="contacts__link" href="tel:123456789">
            +1-234-56-789
          </a>
          <a
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rosebotaniquestore">
            Instagram
          </a>
          <a
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/rosebotanique">
            Telegram
          </a>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Contacts;
