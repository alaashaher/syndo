import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DonationComplate from '../../pages/donation-page/DonationComplate';
import DonationPage from '../../pages/donation-page/DonationPage';

import HomePage from '../../pages/home-page/HomePage';
import PageNotFound from '../../pages/page-not-found/PageNotFound';

import routerLinks from './routerLinks';

const Routess = () => {
  return (
    <Routes>
      <Route exact path={routerLinks.homePage} element={<HomePage />}></Route>
      <Route exact path={routerLinks.donationPage} element={<DonationPage />}></Route>
      <Route exact path={routerLinks.donationSuccess} element={<DonationComplate />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default Routess;
