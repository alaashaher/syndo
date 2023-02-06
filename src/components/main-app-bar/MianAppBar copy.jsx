import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import routerLinks from '../app/routerLinks';
import LanguageButton from '../../common/language-button/LanguageButton';
import Logo from '../../common/logo/Logo';
import mainAppBarLinks from './mainAppBarLinks';
import './MainAppBar.scss';
import MainAppBarLg from './MainAppBarLg';

const MianAppBar = () => {
  const { t } = useTranslation();

  const renderNavLinks = () => {
    return (
      <ul>
        {mainAppBarLinks(t).map(({ id, name, link }) => (
          <li key={id}>
            <NavLink activeClassName="active-link" to={link} exact>
              {name}
              <div className="active-img-wrap"></div>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  // detect route
  const { pathname } = useLocation();
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    if (pathname === routerLinks.homePage) {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [pathname]);

  /////////////////////////////////////////

  const [scrollY, setScrollY] = useState(window.scrollY || document.documentElement.scrollTop);
  const [scrollDir, setScrollDir] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY || document.documentElement.scrollTop) > scrollY) {
        setScrollDir('scroll-down');
      } else {
        setScrollDir('scroll-up');
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
      <MainAppBarLg
        className={`main-app-bar ${isLight ? 'light' : 'dark'} ${scrollDir ? scrollDir : ''} ${
          scrollY > 0 ? 'exceeds0' : ''
        }`}
      />
      <div
        className={`main-app-bar ${isLight ? 'light' : 'dark'} ${scrollDir ? scrollDir : ''} ${
          scrollY > 0 ? 'exceeds0' : ''
        }`}>
        <div className="custom-container">
          <div className="nav-content-wrapper">
            <Logo className="main-app-bar-logo" />
            <div className="nav-lang-wrapper">
              {renderNavLinks()}
              <LanguageButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MianAppBar;
