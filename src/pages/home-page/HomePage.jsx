import React from 'react';

import DocTitleScrollTop from '../../utils/DocTitleScrollTop';
import ExploreSection from './home-components/explore-section/ExploreSection';
import FeaturedSection from './home-components/featured-section/FeaturedSection';
import HeroSection from './home-components/hero-section/HeroSection';

import './HomePage.scss';

// import Fade from 'react-reveal/Fade';

const HomePage = () => {
  DocTitleScrollTop();

  return (
    // <Fade delay={50}>
    <div className="home-page">
      <HeroSection />
      <ExploreSection />

      <FeaturedSection />
    </div>
  );
};

export default HomePage;
