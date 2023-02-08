import React from 'react';
import { useNavigate } from 'react-router-dom';

import success from '../../assets/imgs/donation/success.png';
import routerLinks from '../../components/app/routerLinks';

import './DonationPage.scss';
const DonationComplate = () => {
  const navigate = useNavigate();

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
          <a  className="close" onClick={()=> navigate(routerLinks.homePage)}>
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationComplate;
