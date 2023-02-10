import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="main-wrapper">
      <AnimatedPage>
        <Header />
      </AnimatedPage>
      <Content />
      <Footer />
    </div>
  );
};

export default Index;
