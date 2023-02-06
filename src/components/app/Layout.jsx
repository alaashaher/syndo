import React from 'react';
import { useTranslation } from 'react-i18next';
import MainAppFooter from '../main-app-footer/MainAppFooter';

const AppLayout = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <div className={`app-layout app-${i18n.dir()}`}>
      {/* <MianAppBar /> */}
      {children}
      <MainAppFooter />
    </div>
  );
};

export default AppLayout;
