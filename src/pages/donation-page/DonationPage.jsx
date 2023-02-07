import React from 'react';
import { useTranslation } from 'react-i18next';

import user from '../../assets/imgs/donation/user-data.png';
import donationData from '../../assets/imgs/donation/donation-data.png';

import './DonationPage.scss';
import UserForm from './UserForm';
const DonationPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="donation-page">
      <div className="donation-bg"></div>
      <div className="donation-title">{t('Donation Application')}</div>
      <div className="custom-container">
        <div className="donation-form">
          <div className="tabs">
            <div className="tab-div first active">
              <img src={user} />
              1. Personal Info
            </div>
            <div className="tab-div">
              <img src={donationData} />
              2. Donation
            </div>
          </div>
          <div className="user-form">
            <UserForm />
            <div className="btns">
              <button className="close">close</button>
              <button className="next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
