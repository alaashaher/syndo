import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home-page/HomePage';
import PageNotFound from '../../pages/page-not-found/PageNotFound';

import routerLinks from './routerLinks';

const Routess = () => {
  return (
    <Routes>
      <Route exact path={routerLinks.homePage} element={<HomePage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
  
    </Routes>
  );
};

export default Routess;
