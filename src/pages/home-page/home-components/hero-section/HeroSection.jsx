import React from 'react';
import { useTranslation } from 'react-i18next';

import imageHeader from '../../../../assets/imgs/hero-section/hero-img.png';
import './HeroSection.scss'
const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`hero-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="main-wrapper">
          <div className="hero-text">
            <h1 className="h1-text">{t('home_page.hero_section.title')}</h1>
            <h1 className="h1-text">{t('home_page.hero_section.sub_title')}</h1>
            <div className="p-text-wrap">
              <p className="p-text">{t('home_page.hero_section.desc')}</p>
            </div>
          </div>

          <div className="hero-img">
            <img src={imageHeader} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
