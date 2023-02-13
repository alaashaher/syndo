import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MianAppBar from '../main-app-bar/MianAppBar';
import MainAppFooter from '../main-app-footer/MainAppFooter';

const AppLayout = ({ children }) => {
  const { i18n } = useTranslation();
  const [themes, setthemes] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className={`app-layout app-${i18n.dir()} ${!themes ? 'dark-mood' : 'light-mood'}`}>
      <MianAppBar setthemes={setthemes} themes={themes}/>
      {children}
      <MainAppFooter />
    </div>
  );
};

export default AppLayout;
