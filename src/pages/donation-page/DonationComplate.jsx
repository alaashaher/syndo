import React from 'react';

import success from '../../assets/imgs/donation/success.png';

import './DonationPage.scss';
const DonationComplate = () => {
  return (
    <div className="donation-page">
      <div className="donation-bg"></div>
      <div className="custom-container success-page">
        <div className="img">
          <img src={success} alt="success" width={140} />
        </div>
        <div className="text">Thank you!</div>
        <div className="desc">
          Your donation of 200 EGP for Resala Campaign is made successfully.
        </div>
        <div className='colse-div'>
          <a href="" className="close">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationComplate;
