import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import routerLinks from '../app/routerLinks';
import MainAppBarLg from './MainAppBarLg';
import MainAppBarMd from './MainAppBarMd';

const MianAppBar = () => {
  // detect route
  const { pathname } = useLocation();
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    if (pathname === routerLinks.homePage) {
      setIsLight(true);
    } else {
      setIsLight(true);
    }
  }, [pathname]);

  /////////////////////////////////////////

  const [scrollY, setScrollY] = useState(window.scrollY || document.documentElement.scrollTop);
  // const [scrollDir, setScrollDir] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY || document.documentElement.scrollTop) > scrollY) {
        // setScrollDir('scroll-down');
      } else {
        // setScrollDir('scroll-up');
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <MainAppBarLg className={`main-app-bar main-app-bar-lg ${isLight ? 'light' : 'dark'}`} />

      <MainAppBarMd className={`main-app-bar main-app-bar-md ${isLight ? 'light' : 'dark'}`} />
    </>
  );
};

export default MianAppBar;
