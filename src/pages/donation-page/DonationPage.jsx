import React from 'react';
import { useTranslation } from 'react-i18next';

import user from '../../assets/imgs/donation/user-data.png';
import donationData from '../../assets/imgs/donation/donation-data.png';
import donationDone from '../../assets/imgs/donation/donation-done.png';

import './DonationPage.scss';
import UserForm from './UserForm';
import { useState } from 'react';
import Payment from './Payment';
const DonationPage = () => {
  const { t, i18n } = useTranslation();
  const [form, setform] = useState(1);
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
            <div className={`tab-div ${form === 2 ? 'active' : ''}`}>
              <img src={form === 1 ? donationData : donationDone} />
              2. Donation
            </div>
          </div>
          <div className="user-form">
            {form === 1 ? <UserForm setform={setform} /> : <Payment setform={setform}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
