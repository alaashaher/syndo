import React from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../../../assets/imgs/explore-section/right-arrow.png';
import './ExploreSection.scss';

const ExploreSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`explore-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="explore-title">
          <h1>{t('explore_section.title')}</h1>
          <div className='arrow-img'>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="explore-items">
          <div className="explore-card"></div>
          <div className="explore-card"></div>
          <div className="explore-card"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
