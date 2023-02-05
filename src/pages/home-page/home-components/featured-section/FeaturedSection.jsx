import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import brand1 from '../../../../assets/imgs/featured/cocacol.png';
import brand2 from '../../../../assets/imgs/featured/lays.png';
import brand3 from '../../../../assets/imgs/featured/pepsi.png';
import brand4 from '../../../../assets/imgs/featured/pringles.png';

import './FeaturedSection.scss';
const FeaturedSection = () => {
  const { t, i18n } = useTranslation();

  const brand = [brand1, brand2, brand3, brand4, brand1, brand2, brand3, brand4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true
  };
  return (
    <div className={`featured-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="featured-title">
          <h1>{t('featured_section.title')}</h1>
        </div>
        <div className="fearured-item">
          <Slider {...settings}>
            {brand?.length > 0 &&
              brand.map((item, index) => <img key={index} alt="brand" title="brand" src={item} />)}
          </Slider>
        </div>
        <div className="craete-title">
          <h1>{t('featured_section.create')}</h1>
          <p>{t('featured_section.create_desc')}</p>
          <div className="craete-btn">
            <a>{t('featured_section.craete_btn')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
