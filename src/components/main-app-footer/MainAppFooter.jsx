import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import routerLinks from '../app/routerLinks';

import './MainAppFooter.scss';
const MainAppFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="main-app-footer">
      <div className="custom-container">
        <div className="footer-content-wrap">
          <div className="footer-about footer-shared">
            <img src="/assets/imgs/logo/logo.png" alt="logo" className="footer-logo" />
            <p className="footer-desc">{t('main_app_footer.footer_desc')}</p>
            <div className="app-social-links">
              <div className="social-links"></div>
            </div>
          </div>
          <div className="footer-links footer-shared">
            <div className="wrapper-title">{t('main_app_footer.footer_links_title')}</div>
            <ul className="nav-links-ul">
              <li>product 1</li>
              <li>product 2</li>
            </ul>
          </div>
          <div className="footer-links footer-shared">
            <div className="wrapper-title">{t('main_app_footer.footer_social_title')}</div>
            <ul className="nav-links-ul">
              <li>
                <RouterLink to={routerLinks.homePage}>
                  <span>{t('main_app_bar_links.about')}</span>
                </RouterLink>
              </li>
            </ul>
          </div>
          <div className="footer-links footer-shared">
            <div className="wrapper-title">{t('main_app_footer.footer_resources_title')}</div>
            <ul className="nav-links-ul">
              <li>
                <RouterLink to={routerLinks.homePage}>
                  <span>{t('main_app_bar_links.faq')}</span>
                  <span>{t('main_app_bar_links.support')}</span>

                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainAppFooter;
