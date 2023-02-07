import React from 'react';
import qoute from '../../../../assets/imgs/explore-section/qoute.png';
import Ellipse from '../../../../assets/imgs/explore-section/Ellipse.png';
import { useTranslation } from 'react-i18next';

import './OurDoers.scss';
import Slider from 'react-slick';
const OurDoers = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true
  };
  const doers = [
    {
      img: Ellipse,
      name: 'Peter Green',
      company: 'Company XYZ - CEO',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      img: Ellipse,
      name: 'Jane Brown',
      company: 'Company XYZ - CEO',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      img: Ellipse,
      name: 'Isaac Ho',
      company: 'Company XYZ - CEO',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  ];

  return (
    <div className={`doers-section ${i18n.dir()}`}>
      <div className="custom-container">
        <div className="doers-title">
          <h1>{t('doers_section.title')}</h1>
        </div>
        <Slider {...settings}>
          {doers?.length > 0 &&
            doers.map((item, index) => (
              <div className="card" key={index}>
                <div className="doers-card">
                  <div className="header">
                    <div className="image-div">
                      <div>
                        <img src={item.img} />
                      </div>
                      <div>
                        <p className="name">{item.name}</p>
                        <p className="company">{item.company}</p>
                      </div>
                    </div>
                    <div className="qoute-img">
                      <img src={qoute} />
                    </div>
                  </div>
                  <div className="body">{item.desc}</div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurDoers;
