import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/logo/Logo';
import mainAppBarLinks from './mainAppBarLinks';
import './MainAppBarLg.scss';

const MainAppBarLg = ({ className }) => {
  const { t } = useTranslation();

  const renderNavLinks = () => {
    return (
      <ul>
        {mainAppBarLinks(t).map(({ id, name, link, subitems }) => {
          if (link !== null) {
            return (
              <li key={id}>
                <NavLink activeClassName="active-link" to={link} exact>
                  {name}
                  <div className="active-img-wrap"></div>
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={id}>
                <div className="dropdown">
                  <span>{name}</span>
                  <div className="dropdown-content">
                    <ul>
                      {subitems.map((item) => {
                        return (
                          <li key={item.id}>
                            <NavLink activeClassName="active-link" to={item.link} exact>
                              {item.name}
                              <div className="active-img-wrap"></div>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  };
  return (
    <div className={className}>
      <div className="custom-container">
        <div className="nav-content-wrapper">
          <Logo className="main-app-bar-logo" />
          <div className="nav-lang-wrapper">
            {renderNavLinks()}
            <a className='sign-up-btn'>{t('main_app_bar_links.sign_up')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAppBarLg;
