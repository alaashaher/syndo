import React from 'react';

import DocTitleScrollTop from '../../utils/DocTitleScrollTop';
import HeroSection from './home-components/hero-section/HeroSection';

import './HomePage.scss';

// import Fade from 'react-reveal/Fade';

const HomePage = () => {
  DocTitleScrollTop();

  return (
    // <Fade delay={50}>
    <div className="home-page">
      <HeroSection />
    </div>
  );
};

export default HomePage;
