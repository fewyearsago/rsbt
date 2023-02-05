import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Contacts = () => {
  return (
    <AnimatedPage>
      <Menu />
      <div className="contacts">
        <div className="contacts__box">
          <div className="contacts__inner">
            <svg
              className="contacts__svg"
              data-name="Livello 1"
              id="Livello_1"
              width="30px"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg">
              <title />
              <path d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z" />
              <path d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z" />
            </svg>
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
              href="https://t.me/rsbtnq">
              Telegram
            </a>
          </div>
          <div className="contacts__item">
            <h1 className="contacts__title">Контакты</h1>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default Contacts;
