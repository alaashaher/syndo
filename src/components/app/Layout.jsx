import React from 'react';
import { useTranslation } from 'react-i18next';

const AppLayout = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <div className={`app-layout app-${i18n.dir()}`}>
      {/* <MianAppBar /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default AppLayout;
