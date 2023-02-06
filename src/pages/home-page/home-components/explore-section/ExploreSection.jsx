import React from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../../../assets/imgs/explore-section/right-arrow.png';
import EgyptianFoodBank from '../../../../assets/imgs/explore-section/Egyptian-Food-Bank.png';
import EgyptianFoodBankLogo from '../../../../assets/imgs/explore-section/Egyptian-Food-Bank-logo.png';

import './ExploreSection.scss';

const ExploreSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`explore-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="explore-title">
          <h1>{t('explore_section.title')}</h1>
          <div className="arrow-img">
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="explore-items">
          <div className="explore-card">
            <div className="header" style={{ backgroundImage: `url(${EgyptianFoodBank})` }}>
              <div>
                <img src={EgyptianFoodBankLogo} alt="EgyptianFoodBankLogo" />
              </div>
              <div></div>
            </div>
            <div className="cart-data">
              <h1>Egyptian Food Bank</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's{' '}
              </p>
              <div className="tags">
                <div>LABEL 1</div>
                <div>LABEL 2</div>
                <div>LABEL 3</div>
              </div>
            </div>
          </div>
          <div className="explore-card"></div>
          <div className="explore-card"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
